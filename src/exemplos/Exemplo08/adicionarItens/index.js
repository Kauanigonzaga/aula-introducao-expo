import { useState } from 'react';
import { View, Text, Alert, Plataform, FlatList } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default function AddItem({ addItems }) {
  const [text, setText] = useState('');

  function addItem(text) {
    if (text === ''){
       Plataform === 'web'
        ? alert ('O valor do item não pode ser vazio')
        :Alert.alert('Erro', 'O valor do item não pode ser vazio', [{text: 'ok'}]);    
    }
    else {
      setItems(prevItems => {
        return [{ id: uuid.v4(), text }, ...prevItems];
      }   );
    }
  }
  console.log (Plataform.OS); 

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Adicionar item...'
        style={styles.input}
        onChangeText={txt => setText(txt)}
        value={text}
      />

      <TouchableOpacity style={styles.button} onPress={() => addItems(text)}>
        <Text style={styles.buttonText}>
          <MaterialCommunityIcons
            name="plus"
            size={26}
            color="#fafafa"
          />
          Adicionar Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}
