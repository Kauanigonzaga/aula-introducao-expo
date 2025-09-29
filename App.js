import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';



import Constants from 'expo-constants';

//EXEMPLOS 
import Exemplo01 from './src/exemplos/Exemplo01';     
import Exemplo02 from './src/exemplos/exemplo02';
import Exemplo03 from './src/exemplos/exemplo3';
import Exemplo04 from './src/exemplos/exemplo04';
import Exemplo05 from './src/exemplos/exemplo05';


//ATIVIDADES
import Atividade01 from './src/Atividade/Atividade01';
import Atividade02 from './src/Atividade/Atividade02';
import Atividade03 from './src/Atividade/Atividade03';
import Atividade04 from './src/Atividade/Atividade04';
import Atividade05 from './src/Atividade/Atividade05';
export default function App() {
  return (
    <View style={styles.container}>
      <Atividade05/>
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
