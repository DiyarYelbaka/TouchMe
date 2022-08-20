import { View, Text,StyleSheet,Image,Dimensions,Alert } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { useForm,Controller } from "react-hook-form";
import { Route, useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

import Logo from '../../assets/confirmyourEmail.png'

const ConfirmEmailScreen = ({navigation}) => {
    const route = useRoute();

    const {handleSubmit,control,watch}  = useForm({
      defaultValues:{username:route?.params?.username}
    });

    const username=watch('username')

    async function onConfirmPressed(data){
      try {
        await Auth.confirmSignUp(data.username, data.code);
        navigation.navigate('Sign in')
      } catch (error) {
         Alert.alert('Hey', error.message)
      }
    }

    async function onResendCode(){
      try {
        await Auth.resendSignUp(username);
        Alert.alert('Success','Code was resent to your email')
     } catch (error) {
      Alert.alert('Hey', error.message)
    }
    }

  return (
    <View style={styles.container}>
     <Image source={Logo}  style={styles.image}/>
     <CustomInput
        name={'username'}
        placeholder={'username'}
        control={control}
        rules={{required:'Username is required',}}
       />
     <CustomInput
        name={'code'}
        placeholder={'Enter your confirmation code'}
        control={control}
        rules={{required:'Code is not match',}}
       />
      <View style={styles.bodyContainer}> 
       <CustomButton text={'Confirm'} onPress={handleSubmit(onConfirmPressed)}/>
       <CustomButton text={'Resend Code'} type={'SECONDARY'} onPress={onResendCode} />
       <CustomButton text={'Back to sign in'} type={'TERTIARY'} onPress={()=>navigation.navigate('Sign in')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white'
    },
    bodyContainer:{
        marginHorizontal:20,
        marginVertical:20,
        justifyContent:'space-between'
    },
    image:{
     width:Dimensions.get('window').width/1.1,
     height:190,
     alignSelf:'center',
    }
})

export default ConfirmEmailScreen