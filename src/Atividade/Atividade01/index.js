import { View, Text } from 'react-native';

import styles from './styles';

function Exemplo01() {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>ATIVIDADE 01</Text>
      <Text style={styles.texto}>Adicionado outros textos </Text>
      <Text style={styles.texto}>Hoje é Sexta-feira </Text>
      <Text style={styles.texto}>Aula de react-native com Expo</Text>
      <Text style={styles.texto}>Data: 29/08/25 </Text>
    </View>
  );
}

export default Exemplo01;
