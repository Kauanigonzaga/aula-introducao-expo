import  { useState }from 'react'; 

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade03() {

  const [numero, setNumero] = useState (0);

  function handleIncrementar() {
    setNumero(numero +1);

  } 
  
  function handleDecrementar() {
      setNumero(numero -1);  
    //console.log(numero);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>atividade 3 </Text>

    
      <TouchableOpacity style={styles.botao} onPress={() => handleIncrementar()}> 
      
        <Text style={styles.txtBotao}>     +     </Text>
        
      </TouchableOpacity>

      <Text style={styles.texto}>{numero}</Text>

      <TouchableOpacity style={styles.botao} onPress={() => handleDecrementar()}> 
      
        <Text style={styles.txtBotao}>     -     </Text>
        </TouchableOpacity>

    </View>
  );
}
