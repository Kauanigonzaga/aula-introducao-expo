import { View, Text, Image } from 'react-native';
import styles from './styles';
import img from '../../../assets/002-1-react-native.png';
import Mensagem from './mensagem';

export default function Atividade02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ATIVIDADE 2</Text>
      <Image source={img} style={styles.imagem} />
      <Mensagem titulo={'TINTA DE CABELO ROSA'}>
        Tinta de cabelo não testada em animais
      </Mensagem>

      <Mensagem titulo={'TINTA PARA CABELO CASTANHO CLARO'}>
        Não testada em animais
      </Mensagem>

      <Mensagem titulo={'TINTA PARA CABELO PRETO'}>
        Testado em animais 
      </Mensagem>


    </View>
  );
}
