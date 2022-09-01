import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import textLogo from '../../assets/CreateOrder.png'
import Logo from '../../assets/onBoardingLogo.png'

const OnBoarding = ({navigation}) => {
    function onPress(){
      navigation.navigate('Sign in')
      
      
    }
  return (
    <View style={styles.container}>
      <Image source={textLogo}  style={styles.textLogo} />
      <Image source={Logo}  style={styles.Logo} />
      <Text style={styles.text}>It's easy, just click on the plus</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.textbutton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    textLogo:{
     marginVertical:50
    },
    Logo:{
        marginVertical:10,
    },
    text:{
        marginVertical:50,
        fontSize:16,
        color:'white'
    },
    textbutton:{
       fontSize:40,
       color:'white',
       alignSelf:'center',
       top:-3
    },
    button:{
     backgroundColor:'#20C3AF',
     borderRadius:50,
     width:70,
     height:70,
     justifyContent:'center'
    }

  })

export default OnBoarding