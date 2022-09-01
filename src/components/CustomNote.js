import { View, Text,StyleSheet,TouchableOpacity, Pressable,Dimensions,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'

import { useNavigation } from '@react-navigation/native';


const CustomNote = ({data,complitePress,deleteButton}) => {

  const navigation = useNavigation();


  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(1, '0');
    return `#${randomColor}`;
  };

  function deleteNote(){
    deleteButton()
    Alert.alert('Başarılı','Not başarıyla silindi')
  }

  function infoPress(){
    navigation.navigate('listNote',{data})
  }
  
  return (
    <TouchableOpacity
    onPress={infoPress}
    onLongPress={deleteNote}
    style={[styles.container, {backgroundColor: generateColor()}]}
   >
    <View>
     <Text  style={styles.title}>{data.name}</Text>
     </View>
     </TouchableOpacity>
     
  )
}

const styles= StyleSheet.create({
    container:{
      width:Dimensions.get('window').width/1.1,
      minHeight:100,
      backgroundColor: 'white',
       alignItems:'center',
       alignSelf:'center',
       borderRadius:12,
       justifyContent:'center',
       margin:12
    },
    title:{
        fontSize:20,
        alignSelf:'center',
        color:'white',
        margin:20
    },

})
 
export default CustomNote