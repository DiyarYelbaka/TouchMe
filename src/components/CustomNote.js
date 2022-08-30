import { View, Text,StyleSheet,TouchableOpacity, Pressable,Dimensions,Alert} from 'react-native'
import React,{useState} from 'react'


const CustomNote = ({data,complitePress,navigation,deleteButton}) => {
  
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
    Alert.alert('Bilgi','Silmek için lütfen basılı tutunuz !')
  }
  
  return (
    <TouchableOpacity
    onPress={infoPress}
    onLongPress={deleteNote}
    style={[styles.container, {backgroundColor: generateColor()}]}
   >
    <View>
     <Text  style={styles.title}>{data.description}</Text>
     <View style={styles.checkboxContainer}>
      </View>
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
    checkboxContainer:{
      alignItems:'center',
      top:30,
    },
    checkbox: {
      borderRadius: 2,
      borderWidth: 2,
      fontWeight: '700',
      height: 20,
      marginLeft: 'auto',
      textAlign: 'center',
      width: 20,
      
    },
    completedCheckbox: {
      backgroundColor: '#000',
      color: '#fff',
    },
})
 
export default CustomNote