import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({onChangeText,value,placeholder}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value} 
        placeholder={placeholder}
      />
    </View>
  )
}

const styles= StyleSheet.create({
  input:{
   marginHorizontal:20,
   marginVertical:7,
   backgroundColor:'#F7F7F7',
   height:60,
  }
})

export default CustomInput