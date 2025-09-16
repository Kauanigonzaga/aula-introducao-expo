import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo04 () {
  const [texto, setTexto] = useState ('')
  const [txt2, setTxt2] = useState ('valor')
  return(
    <View style={styles.container}>   
      <Text style={styles.titulo}>Exemplo 4</Text>
      <TextInput
        placeholder="Texto de Fundo"
        keyboardType="visible-password" 
        maxLength={40}
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
      />

      <Text style ={styles.txt}>{txt2}</Text> 
      <TextInput
      value={txt2}
      onChangeText={setTxt2} 
      placeholder="Digite algo"
      style={styles.input}
      keyboardType='ascii-capable'
      />

      <TouchableOpacity
      style={styles.botão}
      onPress={() =>{}}
      >
        <Text style ={styles.textBotao} >Exibir texto  </Text>

      </TouchableOpacity>
    </View>
  );
}



