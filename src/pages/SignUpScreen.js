import { View, Text,StyleSheet,Image,TouchableOpacity,ScrollView,Alert } from 'react-native'
import React,{useState} from 'react'
import signUpLogo from '../../assets/signUpLogo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import TopComponent from '../components/TopComponent'
import { useForm,Controller } from "react-hook-form";
import { Auth } from 'aws-amplify'

const SignUpScreen = ({navigation}) => {
  const [loading,setLoading]= useState(false)
  const {handleSubmit,control,watch}  = useForm();
  const pwd =watch('password')


  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  async function onSignUpPressed(data){
    if(loading){
      return;
    }
    setLoading(true)
    const {username,password,email,name} = data;
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {email,name,preferred_username:username}
    })
     navigation.navigate('ConfirmEmail',{username})
    } catch (error) {
      Alert.alert('Hey',error.message)
    }
    setLoading(false)
 }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TopComponent text={'Sign Up'} backPress={navigation.goBack} />
      <Image source={signUpLogo} style={styles.image}/>
      <View style={styles.bodyContainer}>
      <CustomInput 
          name='name'
          control={control}
          placeholder={' name'}
          rules={{required:'Name is required',
           minLength:{
            value:3,
            message:'Name should be minimum 3 characters long'
           },maxLength:{
            value:24,
            message:'Name should be max 24 characters long'
           }
         }}
          />
         <CustomInput 
          name='username'
          control={control}
          placeholder={' Username'}
          rules={{required:'Username is required',
           minLength:{
            value:3,
            message:'Username should be minimum 3 characters long'
           },maxLength:{
            value:24,
            message:'Username should be max 24 characters long'
           }
         }}
          />
         <CustomInput 
          name='email'
          control={control}
          placeholder={' Enter email'}
          rules={{pattern: {value: EMAIL_REGEX,message:'Email is invalid'} }}
          />
         <CustomInput 
          name='password'
          control={control}
          placeholder={' Enter password'}
          secureTextEntry
          rules={{required:'Password is required',
          minLength:{
            value:3,
            message:'Password should be minimum 3 characters long'
           }}}
         />
         <CustomInput 
         name='repeat-password'
         control={control}
         placeholder={' Confirm Password'}
         secureTextEntry
         rules={{
          validate: value=> value==pwd || 'Password do not match'
         }}
         />
         <View style={styles.buttonContainer}>
         <CustomButton text={loading ? 'Loading..' : 'Sign Up'} onPress={handleSubmit(onSignUpPressed)} />
         <TouchableOpacity
           style={styles.dont}
           onPress={()=>navigation.navigate('Sign in')}
          >
          <Text>Alredy have an account ? <Text style={{color:'#FFB19D'}}>Sign In</Text></Text>
         </TouchableOpacity>
         </View>
      </View>
    </ScrollView >
  )
}

const styles=StyleSheet.create({
  container:{
   backgroundColor:'white',
   flex:1,
  },
  bodyContainer:{
   
  },
  image:{
    alignSelf:'center',
    margin:20,
   
  },
  forgotText:{
    color:'#838391',
    fontWeight:'bold',
    textAlign:'right',
    marginRight:18,
    fontSize:16,
  },
  dont:{
    alignItems:'center',
    margin:20
  },
  buttonContainer:{
    marginHorizontal:20,
    marginVertical:20
  }

})

export default SignUpScreen