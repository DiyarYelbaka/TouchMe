import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlices'

const Count = () => {
  //const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  const onPress =() => dispatch(increment());

  const onPress2 = () =>{
    dispatch(decrement());
  }

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Arttır</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress2}
      >
        <Text>Azalt</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default Count;