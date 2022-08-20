import { View, Text, ActivityIndicator } from 'react-native'
import React,{useEffect,useState} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoarding from './pages/OnBoarding'
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import ConfirmEmailScreen from './pages/ConfirmEmailScreen';
import ForgotPasswordScreen from './pages/ForgotPasswordScreen';
import NewPasswordScreen from './pages/NewPasswordScreen';
import Home from './pages/Home';
import { Auth, Hub } from 'aws-amplify';

const Stack = createStackNavigator();


const Router = () => {
  const [user,setUser] = useState(undefined)

  const checkUser= async()=>{
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache:true})
      setUser(authUser)
    } catch (error) {
      setUser(null)
    }
    
  };

  

  useEffect(()=>{
    checkUser();
  },[]);

  useEffect(()=>{
    const listener = (data) =>{
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut'){
        checkUser();
      }
    }
    Hub.listen('auth',listener)
    return () =>Hub.remove('auth',listener);
    },[]);

  if(user=== undefined){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
        <ActivityIndicator size={39} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown:false
       }}
      > 
        {user ? (
            <Stack.Screen name="Home" component={Home} />
          ):(
            <>
            <Stack.Screen name="OnBoardingScreen" component={OnBoarding} />
            <Stack.Screen name="Sign in" component={SignInScreen} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router