import { View, Text,StyleSheet,Dimensions} from 'react-native'
import React from 'react'

const CustomNote = ({data}) => {
  return (
   <View style={styles.container}>
     <Text style={styles.head}>{data.name}</Text>
     <Text style={styles.title}>{data.description}</Text>
  </View>
  )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor: 'white',
       height:160,
       width:160,
       margin:10,
       alignItems:'center',
       alignSelf:'center',
       borderRadius:50,
       justifyContent:'center',
       borderWidth:2,
    },
    head: {
        fontSize: 25,
        color:'#CD6155',
        top:-20
      },
    title:{
        fontSize:15,
    }
})
 
export default CustomNote