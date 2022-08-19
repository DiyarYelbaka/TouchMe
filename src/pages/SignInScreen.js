import { View, Text,StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import signInLogo from '../../assets/signInLogo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import TopComponent from '../components/TopComponent'

const SignInScreen = ({navigation}) => {
  function onPress(){
    navigation.navigate('Sign Up')
  }
  

  return (
    <ScrollView  style={styles.container} showsVerticalScrollIndicator={false}>
      <TopComponent text={'Sign In'} backPress={navigation.goBack} />
      <Image source={signInLogo} style={styles.image}/>
      <View style={styles.bodyContainer}>
         <CustomInput 
          placeholder={' username'}
          />
         <CustomInput 
          placeholder={' password'}
         />
         <Text style={styles.forgotText}>Forgot your password !</Text>
         <CustomButton text={'Login'} onPress={()=>console.log('Hello my friend')} />
         <TouchableOpacity
           style={styles.dont}
           onPress={onPress}
          >
          <Text>Don't have an account ? <Text style={{color:'#FFB19D'}}>Sign Up</Text></Text>
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
  }

})

export default SignInScreen