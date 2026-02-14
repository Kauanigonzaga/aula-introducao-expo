import {useState} from 'react'; 
import {View, Text, FlatList} from 'react-native'; 
import uuid from 'react-native-uuid';
import AdicionarItens from './adicionarItens';
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

    function addItems(text) {
        setItems(prevItems => {
            return [{id: uuid.v4(), text}, ...prevItems];
        });     
    }

    
    return(
        <View style={styles.container}> 
            <Text style= {styles.titulo}> Exemplo 08 </Text>
            <Text style= {styles.cabecalho}> LISTA DE COMPRAS </Text>
            <AdicionarItens addItems={addItems} /> 
            <FlatList
                data={items}
                renderItem= {({item}) => <ItemLista id={item.id} deleteItem={deleteItem}> 
                {item.text} </ItemLista>} 
                style={styles.lista} />
             </View>
    ); 
}

