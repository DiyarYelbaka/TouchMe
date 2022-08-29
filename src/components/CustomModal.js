import { View, Text,Modal,StyleSheet,Pressable,Alert,TextInput,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';

const CustomModal = ({modalVisible,setModalVisible,setName,setDescription,name,description}) => {

  async function addTodo() {
    await DataStore.save(new Todo({ name, description, isComplete: false }));
    setModalVisible(false);
    setName('');
    setDescription('');
  }
  
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Not Ekle !</Text>
            <View style={styles.inputContainer}>
            <TextInput
             onChangeText={setName}
             placeholder="Başlık"
             multiline
             style={styles.input}
             /> 
             <TextInput
             onChangeText={setDescription}
             placeholder="Detay"
             style={styles.input}
             multiline
            />
            
            </View>
            <View  style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Vazgeç</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={addTodo}
            >
              <Text style={styles.textStyle}>Kaydet</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      
      top:200,
    },
    modalView: {
      width:300,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 30,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button1: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: "red",
      marginHorizontal:15
    },
    button2: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: "#2196F3",
      marginHorizontal:15,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize:24,
      color:'#E67E22',
    },
    inputContainer:{
     width:300,
    },
    buttonContainer:{
     flexDirection:'row',
     margin:12
    },
    input:{
      borderWidth:1,
      backgroundColor:'#F2F3F4',
      margin:4,
      borderRadius:20,
      borderColor:'gray',
    }
  });
  
export default CustomModal