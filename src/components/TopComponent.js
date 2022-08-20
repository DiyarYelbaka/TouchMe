import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="angle-left" size={30} color="#525464" />;
const myIcon2 = <Icon name="bars" size={30} color="#525464" />;




const TopComponent = ({text,backPress,drawerPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
       <TouchableOpacity style={styles.leftIcon} onPress={backPress}>{myIcon}</TouchableOpacity>
        <Text style={styles.head}>{text}</Text>
        <TouchableOpacity style={styles.rightIcon} onPress={drawerPress}></TouchableOpacity>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    height:60,
    alignItems:'center'
  },
  bodyContainer:{
    flexDirection:'row',
    margin:15
  },
  head:{
    flex:0.33,
    fontSize:16,
    fontSize:18,
    fontWeight:'bold',
    marginLeft:40
  },
  leftIcon:{
    flex:0.33,
    textAlign:'left',
  },
  rightIcon:{
    flex:0.33,
    textAlign:'right',
    alignItems:'flex-end'
  }
})

export default TopComponent