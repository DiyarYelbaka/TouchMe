import { View, Text,Modal,StyleSheet,Pressable,Alert,TextInput,Dimensions } from 'react-native'
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
            <Text style={styles.modalText}>Hello World!</Text>
            <View style={styles.inputContainer}>
            <TextInput
             onChangeText={setName}
             placeholder="Name"
            
             />
             <TextInput
             onChangeText={setDescription}
             placeholder="Description"
           
            />
           
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={addTodo}
            >
              <Text style={styles.textStyle}>Add To Do</Text>
            </Pressable>
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
      marginTop: 22,
      top:200,
    },
    modalView: {
      width:300,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
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
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    inputContainer:{
     width:300,
    }
  });
  
export default CustomModal