import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const FloatingButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>Note Ekle</Text>
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
  },
  button: {
    alignItems: "center",
    padding: 10,
    position:'absolute',
    backgroundColor:'#E67E22',
    borderRadius:15,
    width:150,
    height:50,
    justifyContent:'center',
  },
  text:{
    color:'black',
    fontSize:18,
  }
});

export default FloatingButton