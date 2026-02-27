import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaExemplos from '../exemplos/listaExemplos';
import Exemplo1 from '../exemplos/exemplo01';
import Exemplo2 from '../exemplos/exemplo02';
import Exemplo03 from '../exemplos/exemplo3';
import Exemplo04 from '../exemplos/exemplo04';
import Exemplo05 from '../exemplos/exemplo05';
import Exemplo6 from '../exemplos/Exemplo6';
import Exemplo08 from '../exemplos/Exemplo08';

const Stack = createNativeStackNavigator();

function StackExemplos() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ListaExemplos} />
      <Stack.Screen name="Exemplo1" component={Exemplo1} />
      <Stack.Screen name="Exemplo2" component={Exemplo2} />
      <Stack.Screen name="Exemplo03" component={Exemplo03} />
      <Stack.Screen name="Exemplo04" component={Exemplo04} />
      <Stack.Screen name="Exemplo05" component={Exemplo05} />
      <Stack.Screen name="Exemplo6" component={Exemplo6} />
      <Stack.Screen name="Exemplo08" component={Exemplo08} />
    </Stack.Navigator>
  );
}
export default StackExemplos;