import {useState} from 'react'; 
import {View, Text, FlatList} from 'react-native'; 
import uuid from 'react-native-uuid';
import ItemLista from './ItemLista';

import styles from './styles';

export default function Exemplo08() {   


    const [items, setItems] = useState([
        {id: uuid.v4(), text: 'Leite' },
        {id: uuid.v4(), text: 'Ovos' },
        {id: uuid.v4(), text: 'Pão' },      
        {id: uuid.v4(), text: 'Manteiga' },
        {id: uuid.v4(), text: 'Café' },
        {id: uuid.v4(), text: 'Frutas' },
    ]);

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter(item => item.id !== id);
        }); 
    }
    
    return(
        <View style={styles.container}> 
            <Text style= {styles.titulo}> Exemplo 08 </Text>
            <Text style= {styles.cabecalho}> LISTA DE COMPRAS </Text>
            <FlatList
                data={items}
                renderItem= {({item}) => <ItemLista> {item.text} </ItemLista>} 
                style={styles.lista} />
             </View>
    ); 
}

