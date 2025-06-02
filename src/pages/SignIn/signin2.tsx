import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Header from '../../components/atoms/Header/header';
import TextInput from '../../components/atoms/TextInput/textinput';
import Button from '../../components/atoms/Button/button';
import Gap from '../../components/atoms/Gap/gap';
import TextAction from '../../components/molecules/TextAction/textaction';
import BackButton from '../../components/atoms/BackButton/backbutton';

const SignIn = ({navigation}) => {
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (password) {
      navigation.navigate('SignIn', {password: password});
    } else {
      Alert.alert('Login Failed', 'Please enter your password.');
    }
  };

  return (
    <View style={styles.pageContainer}>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Header title="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={30} />
        <TextInput
          placeholder="Password"
          securityTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Gap height={20} />
        <Button
          label="Sign In"
          color="#FFCCE1"
          textColor="white"
          onPress={onSubmit}
        />
        <Gap height={20} />
        <TextAction
          label={'Forgot Password ?'}
          action={'Reset'}
          onPress={() => navigation.navigate('ForgotPassword')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
