import { View, Text,StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import Router from './src/Router'

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

import SplashScreen from 'react-native-splash-screen'


const App = () => {

  useEffect(()=>{
   setTimeout(()=>{
      SplashScreen.hide();
  },2000)
  },[])

  return (
    <>
    <StatusBar
      backgroundColor="transparent"
      translucent={true}/>
   <Router />
   </>
  )
}

export default App