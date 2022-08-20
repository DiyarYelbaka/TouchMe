import { View, Text,StyleSheet,Image,TouchableOpacity,ScrollView,TextInput,Alert } from 'react-native'
import React,{useState} from 'react'
import signInLogo from '../../assets/signInLogo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import TopComponent from '../components/TopComponent'
import { useForm,Controller } from "react-hook-form";
import { Auth,Hub } from 'aws-amplify';

const SignInScreen = ({navigation}) => {
  const [loading,setLoading]= useState(false)

  const {handleSubmit,control,formState:{errors}}  = useForm();

  async function onSignInPressed(data){
    if(loading){
      return;
    }
    setLoading(true)
    try {
      const user = await Auth.signIn(data.username, data.password);

   } catch (error) {
      Alert.alert('Hey',error.message)
    }
    setLoading(false)
  }
  return (
    <ScrollView  style={styles.container} showsVerticalScrollIndicator={false}>
      <TopComponent text={'Sign In'} backPress={navigation.goBack} />
      <Image source={signInLogo} style={styles.image}/>
      <View style={styles.bodyContainer}>

         <CustomInput 
          name='username'
          control={control}
          placeholder={' username'}
          rules={{required:'Username is required',
           minLength:{
            value:3,
            message:'Username should be minimum 3 characters long'
           }
         }}
          />
         <CustomInput 
          name='password'
          control={control}
          placeholder={' password'}
          secureTextEntry
          rules={{required:'Password is required',
          minLength:{
            value:3,
            message:'Password should be minimum 3 characters long'
           }}}
         /> 
      
         <Text onPress={()=>navigation.navigate('ForgotPasswordScreen')} style={styles.forgotText}>Forgot your password !</Text>
         <View style={styles.buttonContainer}>
          <CustomButton text={loading ? 'Loading...' : 'Login'} onPress={handleSubmit(onSignInPressed)} />
          <TouchableOpacity
            style={styles.dont}
            onPress={()=>navigation.navigate('Sign Up')}
           >
           <Text style={{margin:15}}>Don't have an account ? <Text style={{color:'#FFB19D'}}>Sign Up</Text></Text>
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
    margin:50,
   
  },
  forgotText:{
    color:'#838391',
    fontWeight:'bold',
    textAlign:'right',
    marginRight:18,
    fontSize:16,
  },
  dont:{
    alignItems:'center'
  },
  buttonContainer:{
    marginHorizontal:20,
    marginVertical:35
  }

})

export default SignInScreen