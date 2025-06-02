import React from 'react';
import SignIn from './src/pages/SignIn/signin';
import SignIn2 from './src/pages/SignIn/signin2';
import SplashScreen from './src/pages/SplashScreen/splashscreen';
import CreateAccount from './src/pages/CreateAccount/createaccount';
import ForgotPassword from './src/pages/ForgotPassword/forgotpassword';
import ForgotSuccess from './src/pages/ForgotPassword/forgotsuccess';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn2"
          component={SignIn2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotSuccess"
          component={ForgotSuccess}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;