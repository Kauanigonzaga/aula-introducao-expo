import { View, Text, Image } from 'react-native';

import { camisas } from './produtos';

import styles from './styles';


import Card from './card';

function Revisao02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            {/* <Card 
                nome={camisas[1].nome} 
                decricao={camisas[1].decricao} 
                valor={camisas[1].valor} 
                imagem={camisas[1].imagem} 
            /> */}

            {
                camisas.map(item => 
                    <Card
                        nome={item.nome}
                        decricao={item.decricao}
                        valor={item.valor}
                        imagem={item.imagem}
                    />                    
                )
            }

        </View>
    );
}

export default Revisao02;