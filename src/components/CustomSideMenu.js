import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import profile from '../../assets/profil.png'
import { Auth } from 'aws-amplify'

const CustomSideMenu = () => {

    async function onPress(){
         try {
            await Auth.signOut();
         } catch (error) {
            console.log('error signing out: ', error);
         }
        }
  
  return (
    <View style={styles.container}>
      
         <Image source={profile}  style={styles.image}/>
         <Text style={styles.nameText}>Diyar</Text>
        <TouchableOpacity style={styles.bottom}  onPress={onPress}><Text style={styles.titleOut}>Log Out</Text></TouchableOpacity>
      
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#20C3AF',
  },
 
  image:{
    width:100,
    height:100,
    borderRadius:100,
    alignSelf:'center',
    margin:10
  },
  nameText:{
    fontSize:25,
    alignSelf:'center',
    color:'black',
    
    margin:10,

  },
  titleOut:{
    fontSize:20,
    color:'yellow',
    fontWeight:'bold',
    alignSelf:'center'
  },
  bottom:{
    bottom:0,
   
  }
})

export default CustomSideMenu