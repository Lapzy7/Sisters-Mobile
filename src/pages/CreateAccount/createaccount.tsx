import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import Header from '../../components/atoms/Header/header';
import TextInput from '../../components/atoms/TextInput/textinput';
import Button from '../../components/atoms/Button/button';
import Gap from '../../components/atoms/Gap/gap';
import BackButton from '../../components/atoms/BackButton/backbutton';

const CreateAccount = ({navigation}) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (firstname && lastname && email && password) {
      navigation.navigate('SignIn2', {email});
    } else {
      Alert.alert('Registration Failed', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.pageContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <Header title="Create Account" />
      <View style={styles.contentContainer}>
        <Gap height={30} />
        <TextInput
          placeholder="Firstname"
          value={firstname}
          onChangeText={setFirstname}
        />
        <Gap height={20} />
        <TextInput
          placeholder="Lastname"
          value={lastname}
          onChangeText={setLastname}
        />
        <Gap height={20} />
        <TextInput
          placeholder="Email Address"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <Gap height={20} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          securityTextEntry={true}
          autoCapitalize="none"
        />
        <Gap height={20} />
        <Button
          label="Continue"
          color="#FFCCE1"
          textColor="white"
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  separatorContainer: {
    paddingLeft: 5,
  },
  separatorText: {
    fontFamily: 'CircularStd-Book',
    color: '#272727',
    fontSize: 12,
  },
});