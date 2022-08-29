import { View, Text,StyleSheet,TouchableOpacity, Pressable} from 'react-native'
import React,{useState} from 'react'
import ListModal from './ListModel'

const CustomNote = ({data,complitePress,navigation,deleteButton}) => {
  const [modalVisibleList, setModalVisibleList] = useState(false);
  function onPress(){
   
      setModalVisibleList(!modalVisibleList)
  }
  
  return (
  <View  style={styles.container}>
   <TouchableOpacity
    onPress={onPress}
   >
     <Text numberOfLines={1} style={styles.head}>{data.name}</Text>
     <Text numberOfLines={2} style={styles.title}>{data.description}</Text>
    </TouchableOpacity>
     <View style={styles.checkboxContainer}>
      <Pressable
       onPress={complitePress}
      >
      <Text
        style={[styles.checkbox, data.isComplete && styles.completedCheckbox]}
      >
        {data.isComplete ? '✓' : ''}
      </Text> 
      </Pressable>
      </View>
      <ListModal 
       modalVisibleList={modalVisibleList} 
       setModalVisibleList={setModalVisibleList} 
       data={data}
       deleteButton={deleteButton}
     />
     </View>
     
  )
}

const styles= StyleSheet.create({
    container:{
      backgroundColor: 'white',
       height:160,
       width:160,
       margin:10,
       alignItems:'center',
       alignSelf:'center',
       borderRadius:50,
       justifyContent:'center',
       borderWidth:2,
       borderColor:'#808B96',
       shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 10
      
    },
    head: {
        fontSize: 21,
        color:'#CD6155',
        top:-20,
        alignSelf:'center'
      },
    title:{
        fontSize:15,
        alignSelf:'center',
        color:'black'
    },
    checkboxContainer:{
      alignItems:'center',
      top:30,
    },
    checkbox: {
      borderRadius: 2,
      borderWidth: 2,
      fontWeight: '700',
      height: 20,
      marginLeft: 'auto',
      textAlign: 'center',
      width: 20,
      
    },
    completedCheckbox: {
      backgroundColor: '#000',
      color: '#fff',
    },
})
 
export default CustomNote