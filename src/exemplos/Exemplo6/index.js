import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useState } from 'react';
import styles from './styles';

export default function Exemplo6() {
    return (
        <View style= {styles.container}>
            <Text style={styles.paragraph} > Exemplo 6 </Text>
            <View style={styles.esntradaImc} >
                <TextInput placeholder='Massa (kg)' placeholderTextColor='#34495e' keyboardType= 'numeric' styles={styles.input} /> 
                <TextInput placeholder='Altura (m)' placeholderTextColor='#34495e' keyboardType= 'numeric' styles={styles.input} />
            </View>
            <TouchableOpacity style={styles.button} onPress={ () => {}} >
                <Text style={styles.buttonText} > Calcular IMC </Text>
            </TouchableOpacity>
            </View>

    );
}




