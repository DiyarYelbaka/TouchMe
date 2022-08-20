import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Sweet Home</Text>
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