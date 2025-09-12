import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

//EXEMPLOS 
import Exemplo01 from './src/exemplos/Exemplo01';     
import Exemplo02 from './src/exemplos/exemplo02';
import Exemplo03 from './src/exemplos/exemplo3';
//ATIVIDADES
import Atividade01 from './src/Atividade/Atividade01';
import Atividade02 from './src/Atividade/Atividade02';
import Atividade03 from './src/Atividade/Atividade03';
export default function App() {
  return (
    <View style={styles.container}>
      <Atividade03 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
