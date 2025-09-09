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
      <Button 
        onPress={() => {alert('Alguem tocou no botão')}}
        title="Alerta"
        color="deepskyblue"
        accessibilityLabel='Botão de alerta'
      /> 
      <Text style={styles.texto}>{numero}</Text>
      <TouchableOpacity style={styles.botao} onPress={() => handleIncrementar()}> 
      
        <Text style={styles.txtBotao}>Incrementar número</Text>
        
      </TouchableOpacity>
    </View>
  );
}
