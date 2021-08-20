import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function AddTodo({ submitHandler }){
    const [text, setText] = useState('text');
    function changeHandler(value){
        setText(value);
    }

    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder="New Todo" 
                onChangeText={ changeHandler }
            />
            <Button 
                onPress={ () => submitHandler(text)}
                title="Add Todo"
                color="green"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#007a33',
        borderRadius: 16,
    },

    buttonContainer: {
        borderRadius: 16,
    }
})