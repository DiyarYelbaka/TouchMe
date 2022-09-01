import { View, Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React,{useState} from 'react'
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';
import { useForm,Controller } from "react-hook-form";

import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from '../components/HeaderComponent';
import CustomNoteInputText from '../components/CustomNoteInputText';
const myIcon = <Icon name="angle-left" size={50} color="white" />;
const myIcon2 = <Icon name="save" size={30} color="white" />;


const AddNoteScreen = ({navigation}) => {

  const {handleSubmit,control}  = useForm({
    defaultValues: {
      name: '',
      description: '',
    }
  });

   

  async function addTodo({name,description}) {
    await DataStore.save(new Todo({ name, description, isComplete: false }));
    
    navigation.navigate('Home')
  }
  
  return (
    <View style={styles.container}>
      <HeaderComponent addTodo={handleSubmit(addTodo)} goBackPress={()=> navigation.goBack()}/>
      <View style={styles.textContainer}>

       <CustomNoteInputText
         name={'name'}
         placeholder={'Başlık'}
         control={control}
         rules={{required:'Lütfen başlık giriniz !',}}
         type={'headerTitle'}
       />
       <CustomNoteInputText
         name={'description'}
         placeholder={'Notunuz...'}
         control={control}
         rules={{required:'Lütfen not giriniz !',}}
         type={'bodyTitle'}
       />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
   backgroundColor:'#252525',

   },
   TopHeader:{
    backgroundColor:'#252525',
    height:60,
    marginVertical:40,
    flexDirection:'row',
    alignItems:'center'
   },
   button1:{
    width:50,
    height:50,
    backgroundColor:'#3B3B3B',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:8,
    borderRadius:10,
   },
   button2:{
    width:50,
    height:50,
    backgroundColor:'blue',
    marginHorizontal:265,
    alignItems:'center',
    backgroundColor:'#3B3B3B',
    borderRadius:10,
    justifyContent:'center'
   },
   headerTitle:{
    minHeight:100,
    fontSize:48,
   },
   bodyTitle:{
    fontSize:23,
    marginHorizontal:10
   },
   textContainer:{
    marginVertical:-40
   }
 })

export default AddNoteScreen