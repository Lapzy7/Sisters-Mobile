import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from '../../components/molecules/Header/header';
import TextInput from '../../components/molecules/TextInput/textinput';
import Button from '../../components/atoms/Button/button';
import Gap from '../../components/atoms/Gap/gap';
import GoogleButton from '../../components/atoms/SocialButton/socialbutton';
import { facebook, google } from '../../assets/icons/SocialIcon';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    if (email) { 
      navigation.navigate('SignIn2', {email: email}); 
    } else {
      Alert.alert('Login Failed', 'Please enter your email address.');
    }
  };

  return (
    <View style={styles.pageContainer}>
      <Header title="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={30} />
        <TextInput
          placeholder="Email Address"
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
        <Gap height={20} />
        <View style={styles.separatorContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.separatorText}>
              Don't have an Account? Create One
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={40} />
        <GoogleButton onPress={() => signInWithGoogle()}/>
        <GoogleButton onPress={() => signInWithFacebook()} iconSource={facebook} text='Continue With Facebook'/>
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
