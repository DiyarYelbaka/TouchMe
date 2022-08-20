import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { useForm,Controller } from "react-hook-form";

const CustomInput = ({name,placeholder,control,secureTextEntry,rules={}}) => {
  return (
    
        <Controller 
          control={control}
          name={name}
          rules={rules}
          render={({field:{value,onChange,onBlur},fieldState:{error}})=>
          <View>
            <TextInput 
               value={value} 
               onChangeText={onChange} 
               onBlur={onBlur} 
               placeholder={placeholder}
               style={[styles.input,{borderColor: error? 'red' : 'white'}]}
               secureTextEntry={secureTextEntry}
           />
           {error && <Text style={styles.error}>{error.message ||'Error'}</Text>}
           </View>}

          />
    
  )
}

const styles= StyleSheet.create({
  input:{
   marginHorizontal:20,
   marginVertical:7,
   backgroundColor:'#F7F7F7',
   height:60,
   borderWidth:1
  },
  error:{
    marginHorizontal:20,
    color:'red'
  }
})

export default CustomInput