import { View, Text,StyleSheet,Image,Dimensions } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { useForm,Controller } from "react-hook-form";
import Logo from '../../assets/confirmyourEmail.png'

const ConfirmEmailScreen = () => {
    const {handleSubmit,control}  = useForm();

    function onConfirmPressed(){

    }

  return (
    <View style={styles.container}>
     <Image source={Logo}  style={styles.image}/>
     <CustomInput
        name={'confirmCode'}
        placeholder={'code'}
        control={control}
        rules={{required:'Code is not match',}}
       />
      <View style={styles.bodyContainer}> 
       <CustomButton text={'Confirm'} onPress={handleSubmit(onConfirmPressed)}/>
       <CustomButton text={'Resend Code'} type={'SECONDARY'} />
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