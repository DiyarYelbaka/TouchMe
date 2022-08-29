import { View, Text, StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomToDoTopComponent = ({navigation,DrawerSubmit}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={DrawerSubmit}
      style={styles.button}
      >
        <Icon name="backburger" size={40} color="#34495E" />
      </TouchableOpacity>
      <Text style={styles.head}>Note Screen</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
     backgroundColor:'#ECF0F1',
     width:Dimensions.get('window').width/1,
     height:60,
     borderBottomLeftRadius:40,
     borderBottomRightRadius:40,
     borderWidth:2,
     flexDirection:'row'
    },
    head:{
      alignSelf:'center',
      color:'#CD5C5C',
      fontSize:25,
      alignSelf:'center',
      marginHorizontal:78,
    },
    button:{
      margin:8
    }
})

export default CustomToDoTopComponent