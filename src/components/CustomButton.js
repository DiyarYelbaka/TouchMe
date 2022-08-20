import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type}) => {
  return (
    <TouchableOpacity
        style={[styles.button,styles[`button_${type}`]]}
        onPress={onPress}
      >
        <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
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
        marginVertical:5,
       //marginHorizontal:20,
       // marginVertical:40
      },
    text:{
        fontSize:16,
        color:'white',
        fontWeight:'bold'
    },
    button_SECONDARY:{
      borderColor:'#20C3AF',
      borderWidth:2,
      backgroundColor: "white",
    },
    text_SECONDARY:{
        fontSize:16,
        color:'#20C3AF',
        fontWeight:'bold'
    }
  
  })

export default CustomButton