import { View, Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="angle-left" size={50} color="white" />;
const myIcon2 = <Icon name="save" size={30} color="white" />;

const HeaderComponent = ({addTodo,primary}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.TopHeader}>

      <TouchableOpacity
       style={styles.button1}
       onPress={()=> navigation.goBack()}
      >
        <Text>{myIcon}</Text>
      </TouchableOpacity>

      { primary ? '': <TouchableOpacity
      onPress={addTodo}
      style={styles.button2}
      >
        <Text>{myIcon2}</Text>
      </TouchableOpacity>}

      </View >
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
     
   })

export default HeaderComponent