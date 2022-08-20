import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { useForm,Controller } from "react-hook-form";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Logo from '../../assets/resetPassword2.png'


const ResetYourPassword = ({navigation}) => {

  const {handleSubmit,control}  = useForm();

  function onConfirmPressed(){
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
     <Image source={Logo} style={styles.image}/>
      <CustomInput
        name={'code'}
        placeholder={'Enter your confirmation code'}
        control={control}
        rules={{required:'Code is required',}}
       />
       <CustomInput
        name={'newPassword'}
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

export default ResetYourPassword