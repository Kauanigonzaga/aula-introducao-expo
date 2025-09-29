import React, { useState } from 'react';
import { View, Text, StyleSheetTextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo04 () {
  const [texto, setTexto] = useState ('')
  const [txt2, setTxt2] = useState ('valor')
  const [mensagem, setMensagem] = useState ('')

  function handleExibeMensagem(){
    setMensagem(txt2); 
    setTxt2('');
  }
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

      <Text style ={styles.txt}>{mensagem}</Text> 
      <TextInput
      value={txt2}
      onChangeText={setTxt2} 
      placeholder="Digite algo"
      style={styles.input}
      keyboardType='ascii-capable'
      />

      <TouchableOpacity
      style={styles.botao}
      onPress={() => handleExibeMensagem ()}
      
      >
        <Text style ={styles.txtBotao} >Exibir texto  </Text>

      </TouchableOpacity>
    </View>
  );
}



