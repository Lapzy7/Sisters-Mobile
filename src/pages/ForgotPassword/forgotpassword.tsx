import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Header from '../../components/atoms/Header/header';
import TextInput from '../../components/atoms/TextInput/textinput';
import Button from '../../components/atoms/Button/button';
import Gap from '../../components/atoms/Gap/gap';
import BackButton from '../../components/atoms/BackButton/backbutton';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    if (email) {
      navigation.navigate('ForgotSuccess', {email: email});
    } else {
      Alert.alert('Email not found', 'Please try again.');
    }
  };

  return (
    <View style={styles.pageContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <Header title="Forgot Password" />
      <View style={styles.contentContainer}>
        <Gap height={30} />
        <TextInput
          placeholder="Enter Email Address"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
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

export default ForgotPassword;

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
