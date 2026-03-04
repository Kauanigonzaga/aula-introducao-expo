import { View, TouchableOpacity, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function ListaExemplos() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplos</Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Ex1')}
            >
                <Text style={styles.txtBotao}>Exemplo 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Ex2')}
            >
                <Text style={styles.txtBotao}>Exemplo 2</Text>
            </TouchableOpacity>
        </View>
    );
}