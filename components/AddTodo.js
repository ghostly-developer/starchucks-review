import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddTodo({ submitHandler }){
    const [text, setText] = useState('');
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
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style={ styles.buttonStyle }                     
                    onPress={ () => submitHandler(text)}  
                >
                    <MaterialIcons name='add' size={18} color='#fff' />
                    {/*<Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Add</Text>*/}
                </TouchableOpacity>
            </View>
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

    
    buttonStyle: {
        justifyContent: 'center',
        backgroundColor: '#007a33',
        borderRadius: 30,
        width: 50,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },

})