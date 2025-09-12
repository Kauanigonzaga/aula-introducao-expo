import  { useState }from 'react'; 

import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo03() {

  const [numero, setNumero] = useState (0);

  function handleIncrementar() {
    setNumero(numero +1);
    //console.log(numero);
  }



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 3 </Text>
    

      <Text style={styles.txtBotao}>{numero}</Text>
      <TouchableOpacity style={styles.botao} onPress={() => handleIncrementar()}> 
      
        <Text style={styles.txtBotao}>+</Text>
        
      </TouchableOpacity>


      <Text style={styles.txtBotao}>{numero}</Text>

      <TouchableOpacity style={styles.botao} onPress={() => handleIncrementar()}> 
      
        <Text style={styles.txtBotao}>-</Text>
        
      </TouchableOpacity>
    </View>
  );
}
