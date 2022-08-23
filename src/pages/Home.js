import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify'
import TopComponent from '../components/TopComponent'

const Home = () => {
  return (
    <View style={styles.container}>
      <TopComponent text={'Home'}/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    
  },
  text:{
    fontSize:30,
    alignSelf:'center',
    color:'red'
  }
})

export default Home




//  async function onPress(){
//   try {
//      await Auth.signOut();
//   } catch (error) {
//      console.log('error signing out: ', error);
//   }
//  }

{/* <Text onPress={onPress} style={{alignSelf:'center',top:100,color:'yellow',fontSize:25}}>Sign Out</Text> */}
