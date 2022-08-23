import { View, Text,StyleSheet,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import CustomNote from '../components/CustomNote';
import FloatingButton from '../components/FloatingButton';
import CustomModal from '../components/CustomModal';
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';


const NoteListScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    //query the initial todolist and subscribe to data updates
    const subscription = DataStore.observeQuery(Todo).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. 
      const { items, isSynced } = snapshot;
      setTodos(items);
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    }

  }, []);

  async function deleteTodo(todo) {
    try {
      await DataStore.delete(todo);
    } catch (e) {
      console.log('Delete failed: $e');
    }
  }
  
  async function setComplete(updateValue, todo) {
    //update the todo item with updateValue
    await DataStore.save(
      Todo.copyOf(todo, updated => {
        updated.isComplete = updateValue
      })
    );
  }
  
  


  const renderItem = ({ item }) => (
    <CustomNote data={item} />
  );

  return (
    <View style={styles.container}>
      <CustomModal 
      modalVisible={modalVisible} 
      setModalVisible={setModalVisible}
      setName={setName}
      setDescription={setDescription}
      description={description}
      name={name}
       />
       <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
        numColumns={2}
       
      />
      <FloatingButton onPress={()=> setModalVisible(true)} />
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#16A085',
    alignItems:'center',
  },
  
})

export default NoteListScreen