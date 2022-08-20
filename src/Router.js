import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoarding from './pages/OnBoarding'
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import ConfirmEmailScreen from './pages/ConfirmEmailScreen';
import ForgotPasswordScreen from './pages/ForgotPasswordScreen';
import ResetYourPassword from './pages/ResetYourPassword';
import Home from './pages/Home';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown:false
       }}
      > 
        <Stack.Screen name="OnBoardingScreen" component={OnBoarding} />
        <Stack.Screen name="Sign in" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetYourPassword} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router