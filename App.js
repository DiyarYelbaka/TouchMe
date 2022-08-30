import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import Router from './src/Router'

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)


const App = () => {
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