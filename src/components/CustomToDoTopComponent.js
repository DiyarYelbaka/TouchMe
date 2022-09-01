import { View, Text, StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomToDoTopComponent = ({navigation,DrawerSubmit}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Notes</Text>
      {/* <TouchableOpacity 
      onPress={DrawerSubmit}
      style={styles.button}
      >
        <Icon name="backburger" size={40} color="white" />
      </TouchableOpacity> */}
    
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
     backgroundColor:'#252525',
     width:Dimensions.get('window').width/1,
     height:70,
     flexDirection:'row',
     margin:15,
    },
    head:{
      alignSelf:'center',
      color:'white',
      fontSize:43,
      alignSelf:'center',
      marginHorizontal:10,
      marginVertical:12
    },
    button:{
      margin:8,
      marginHorizontal:170,
      backgroundColor:'#3B3B3B',
      borderRadius:20,
      width:50,
      height:50,
      justifyContent:'center'
    }
})

export default CustomToDoTopComponent