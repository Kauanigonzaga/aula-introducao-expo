import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
 
buttonText: {
    fontSize: 25,
    color: '#FF80AB',
    textAlign: 'center',
    padding: 30,
    fontWeight: 'bold',
},

container : {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ba6cceff',
    padding: 8,
},

button: {   
    backgroundColor: '#984aafff',
}, 

resultados: {
    alignSelf : 'center',
    color: '#fff',
    fontSize: 65, 
    padding: 15,
},

paragraph : { 
  margin: 6, 
  fontSize: 55, 
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#2f1635ff',
},

entradaImc: { 
  flex: 1, 
  flexDirection: 'row',
},

input: {
    height: 100,
    width: '50%',
    textAlign: 'center',
    fontSize: 50,
    color: '#fff',
    marginTop: 24, 
}, 


});

export default styles;
