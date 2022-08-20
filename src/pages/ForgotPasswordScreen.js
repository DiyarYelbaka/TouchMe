import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import { useForm,Controller } from "react-hook-form";
import CustomInput from '../components/CustomInput';
import Logo from '../../assets/resetPassword2.png'
import CustomButton from '../components/CustomButton';


const ForgotPasswordScreen = ({navigation}) => {
    
    const {handleSubmit,control}  = useForm();

    function onConfirmPressed(){
      navigation.navigate('ResetPasswordScreen')
    }

  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.image}/>
      <CustomInput
        name={'username'}
        placeholder={'Enter your username'}
        control={control}
        rules={{required:'Username is required',}}
       />
       <View style={styles.bodyContainer}> 
        <CustomButton text={'Send'} onPress={handleSubmit(onConfirmPressed)} />
        <CustomButton text={'Back To Sign In'} type={'SECONDARY'} onPress={()=>navigation.navigate('Sign in') }/>
       </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'white'
    },
    image:{
        alignSelf:'center',
       width:300,
       height:90,
       margin:10,
    },
    bodyContainer:{
      marginHorizontal:20,
      marginVertical:20,
      justifyContent:'space-between'
  },
    
})

export default ForgotPasswordScreen