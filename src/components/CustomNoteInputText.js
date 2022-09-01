import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { useForm,Controller } from "react-hook-form";

const CustomNoteInputText = ({name,placeholder,control,secureTextEntry,rules={},type}) => {
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
               style={[styles[`${type}`]]}
               placeholderTextColor={'gray'}
               color='white'
               multiline
        
           />
           {error && <Text style={styles.error}>{error.message ||'Error'}</Text>}
           </View>}

          />
    
  )
}

const styles= StyleSheet.create({
  headerTitle:{
    minHeight:100,
    fontSize:48,
   },
   bodyTitle:{
    fontSize:23,
    marginHorizontal:10
   },
  error:{
    marginHorizontal:20,
    color:'yellow'
  }
})

export default CustomNoteInputText