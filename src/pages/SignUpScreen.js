import { View, Text,StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import signUpLogo from '../../assets/signUpLogo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import TopComponent from '../components/TopComponent'

const SignUpScreen = ({navigation}) => {
  function onPress(){
    navigation.navigate('Sign in')
  }
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TopComponent text={'Sign Up'} backPress={navigation.goBack} />
      <Image source={signUpLogo} style={styles.image}/>
      <View style={styles.bodyContainer}>
         <CustomInput 
          placeholder={' Username'}
          />
         <CustomInput 
          placeholder={' Enter email'}
          />
         <CustomInput 
          placeholder={' Enter password'}
         />
         <CustomInput 
          placeholder={' Confirm Password'}
         />
         <CustomButton text={'Login'} onPress={()=>console.log('Hello my friend')} />
         <TouchableOpacity
           style={styles.dont}
           onPress={onPress}
          >
          <Text>Alredy have an account ? <Text style={{color:'#FFB19D'}}>Sign In</Text></Text>
         </TouchableOpacity>
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
    alignItems:'center'
  }

})

export default SignUpScreen