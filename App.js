import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy Starchucks', key: '1' },
    { text: 'Learn React Native', key: '2' },
    { text: 'Get Worldbox', key: '3' }
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}

      <View style={styles.content}>
        {/* Form */}

        <View style={styles.list}>
          <FlatList 
            data={ todos }
            renderItem={ ({ item }) => (
              <Text>{ item.text }</Text>
            )}
          />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  textW: {
    color: '#007a33',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  }
});
