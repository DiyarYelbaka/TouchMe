import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';
import HeaderComponent from './HeaderComponent';

const DetailList = ({route}) => {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <HeaderComponent primary={1}/>
       <Text style={styles.header}>{data.name}</Text>
       <Text style={styles.title}>
        {data.description}
        </Text>
    </View>
  )
}

const styles= StyleSheet.create({
 container:{
  flex:1,
  backgroundColor:'#252525'
 },
 header:{
  fontSize:48,
  color:'gray',
  alignSelf:'center'
 },
 title:{
  fontSize:23,
  marginHorizontal:10,
  color:'white',
  marginVertical:20,
  alignSelf:'center'
 }
})
export default DetailList