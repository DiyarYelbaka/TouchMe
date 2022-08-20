import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify'

const Home = () => {

 async function onPress(){
  try {
     await Auth.signOut();
  } catch (error) {
     console.log('error signing out: ', error);
  }
 }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Sweet Home</Text>
      <Text onPress={onPress} style={{alignSelf:'center',top:100,color:'yellow',fontSize:25}}>Sign Out</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'gray',
    justifyContent:'center'
  },
  text:{
    fontSize:30,
    alignSelf:'center',
    color:'white'
  }
})

export default Home