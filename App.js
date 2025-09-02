import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

//EXEMPLOS 
import Exemplo01 from './src/exemplos/exemplo01';     
import Exemplo02 from './src/exemplos/exemplo02';

//ATIVIDADES
import Atividade01 from './src/Atividade/Atividade01';
import Atividade02 from './src/Atividade/Atividade02';
        
export default function App() {
  return (
    <View style={styles.container}>
      <Atividade02 />
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
