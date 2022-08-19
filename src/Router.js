import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoarding from './pages/OnBoarding'
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router