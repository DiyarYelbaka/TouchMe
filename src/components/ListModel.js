import React, { useState } from "react";
import { Dimensions, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListModal = ({modalVisibleList,setModalVisibleList,data,deleteButton}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleList}
        onRequestClose={() => {
          setModalVisible(!modalVisibleList);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity style={styles.close}onPress={() => setModalVisibleList(!modalVisibleList)} >
              <Text style={styles.closeText}>  <Icon name="close-thick" size={25} color="#29D550" /></Text>
            </TouchableOpacity>
           <Text numberOfLines={1} style={styles.head}>{data.name}</Text>
            <Text style={styles.modalText}>{data.description}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={deleteButton}
            >
              <Text style={styles.textStyle}>Listeyi Sil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    marginTop: 22,
    width:Dimensions.get('window').width/1,
    top:200
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    minWidth:300,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "red",
  },
 
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:'black',
    fontSize:20
  },
  head:{
    fontSize: 21,
    color:'#CD6155',
     top:-20,
     alignSelf:'center',
  },
  close:{
   
  },
  closeText:{
  textAlign:'right'
  }
});

export default ListModal;