import { View, Text,StyleSheet,Image,Alert } from 'react-native'
import React from 'react'
import { useForm,Controller } from "react-hook-form";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Logo from '../../assets/resetPassword2.png'
import { Auth } from 'aws-amplify';
import TopComponent from '../components/TopComponent';
import { useRoute } from '@react-navigation/native';


const NewPasswordScreen = ({navigation}) => {

  const route = useRoute();

  const {handleSubmit,control}  = useForm({
    defaultValues:{username:route?.params?.username}
  });

  async function onConfirmPressed(data){
    try {
      await Auth.forgotPasswordSubmit(data.username,data.code,data.password)
      navigation.navigate('Sign in')
    } catch (error) {
     Alert.alert('Hey',error.message)
    }
  }

  return (
    <View style={styles.container}>
      <TopComponent text={''} backPress={navigation.goBack}/>
     <Image source={Logo} style={styles.image}/>
     <CustomInput
        name={'username'}
        placeholder={'Username'}
        control={control}
        rules={{required:'Username is required',}}
       />
      <CustomInput
        name={'code'}
        placeholder={'Enter your confirmation code'}
        control={control}
        rules={{required:'Code is required',}}
       />
       <CustomInput
        name={'password'}
        placeholder={'Enter your new password'}
        control={control}
        rules={{required:'password is required',
        minLength:{
          value:3,
          message:'Password should be minimum 3 characters long'
         }
      }}
       />
       <View style={styles.bodyContainer}> 
        <CustomButton text={'Send'} onPress={handleSubmit(onConfirmPressed)} />
        <CustomButton text={'Back To Sign In'} type={'SECONDARY'} onPress={()=>navigation.navigate('Sign in') }/>
       </View>
    </View>
  )
}

const styles=StyleSheet.create({
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
    alignSelf:'center',
   width:300,
   height:90,
   margin:10,
},

})

export default NewPasswordScreen