import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text}) => {
  return (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#20C3AF",
        padding: 10,
        height:60,
        justifyContent:'center',
        marginHorizontal:20,
        marginVertical:40
      },
    text:{
        fontSize:16,
        color:'white',
        fontWeight:'bold'
    }
  
  })

export default CustomButton