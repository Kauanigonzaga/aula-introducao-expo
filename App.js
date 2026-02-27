import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackExemplos from './src/navegacao/stackExemplos';


import Constants from 'expo-constants';

import Revisao09 from './src/revisao/rev09';


//ATIVIDADES
// import Atividade01 from './src/Atividade/Atividade01';
// import Atividade02 from './src/Atividade/Atividade02';
// import Atividade03 from './src/Atividade/Atividade03';
// import Atividade04 from './src/Atividade/Atividade04';
// import Atividade05 from './src/Atividade/Atividade05';

export default function App() {
  return (
    <View style={styles.container}>
     <NavigationContainer>
<StackExemplos />
     </NavigationContainer>
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
