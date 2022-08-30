import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}><Icon name="plus" size={40} color="white" /></Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems:'center',
    position:'absolute',
    bottom:20,
    right:10
  },
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor:'#CB4335',
    borderRadius:40,
    width:70,
    height:70,
    justifyContent:'center',
    shadowColor: 'white',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    
  },
  text:{
    color:'white',
    fontSize:50,
   
  }
});

export default FloatingButton