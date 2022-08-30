import { View, Text,Modal,StyleSheet,Pressable,Alert,TextInput,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';
import { useSelector, useDispatch } from 'react-redux'
import { setModal} from '../redux/slices/modalSlice'

const CustomModal = ({setName,setDescription,name,description}) => {

  const modal = useSelector((state) => state.modal.value)
  const dispatch = useDispatch()
  


  async function addTodo() {
    await DataStore.save(new Todo({ name, description, isComplete: false }));
    dispatch(setModal())
    setName('');
    setDescription('');
  }
  
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          dispatch(setModal())
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Not Ekle !</Text>
            <View style={styles.inputContainer}>
             <TextInput
             onChangeText={setDescription}
             placeholder="Notunuzu Giriniz..."
             style={styles.input}
             multiline
            />
            
            </View>
            <View  style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => dispatch(setModal())}
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
      width:320,
      margin: 20,
      backgroundColor: "#252525",
      borderRadius: 20,
      padding: 30,
      alignItems: "center",
      shadowColor: "white",
      borderWidth:1,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button1: {
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      backgroundColor: "red",
      marginHorizontal:15
    },
    button2: {
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      backgroundColor: "green",
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
      color:'#CCD1D1',
      fontWeight:'bold',
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
      backgroundColor:'#CCD1D1',
      margin:4,
      borderRadius:5,
      borderColor:'gray',
      height:60,
    }
  });
  
export default CustomModal