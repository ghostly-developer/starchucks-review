import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy Starchucks', key: '1' },
    { text: 'Learn React Native', key: '2' },
    { text: 'Get Worldbox', key: '3' }
  ]);

  function pressHandler(key){
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  function submitHandler(text){
    if (text.length > 3 ){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString() }, //Not the best way, temporary key generation
          ...prevTodos
        ]
      })
    } else{
      Alert.alert("Oops!", "Todos must be over 3 characters long.", [
        {text: "Acknowledge", onPress: () => console.log("Alert Colosed")}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* Header */}
        <Header />
    
        <View style={styles.content}>
          {/* Form */}
          <AddTodo submitHandler={ submitHandler }/>
          <View style={styles.list}>
            <FlatList 
              data={ todos }
              renderItem={ ({ item }) => (
                <TodoItem item={ item } pressHandler={ pressHandler }/>
              )}
            />
          </View>
              
        </View>
              
      </View>
    </TouchableWithoutFeedback>
  );
}

//flex: 1 takes the whole available screenspace, like using vh in HTML
const styles = StyleSheet.create({
  textM: {
    color: '#007a33',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    padding: 40,
  },

  list: {
    flex: 1,
    marginTop: 20,
  }
});
