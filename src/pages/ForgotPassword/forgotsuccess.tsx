import React, {useState} from 'react';
import {StyleSheet, Image, View, Alert} from 'react-native';
import Gap from '../../components/atoms/Gap/gap';
import SmallButton from '../../components/atoms/SmallButton/SmallButton';
import Message from '../../components/atoms/Message/message';
import {emailsend} from '../../assets/Icons';

const ForgotSuccess = ({navigation}) => {
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    if (firstname && lastname && email && password) {
      navigation.navigate('SignIn2', {email});
    } else {
      Alert.alert('Email not found', 'Please try again.');
    }
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.contentContainer}>
        <Image source={emailsend} style={styles.logo} />
        <Message title={'We Sent you an Email to reset your password.'} />
        <Gap height={20} />
        <SmallButton
          label="Return to Login"
          color="#FFCCE1"
          textColor="white"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default ForgotSuccess;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  logo: {
    alignSelf: 'center',
    paddingBottom: 20,
  },
});
