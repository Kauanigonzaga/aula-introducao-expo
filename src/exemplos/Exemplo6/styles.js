import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  titulo: {
    fontSize: RFPercentage(3),
    color: 'deepskyblue',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'deepskyblue',
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    width: '100%',
    height: 80,
    textAlign: 'center', // Centraliza horizontalmente
    textAlignVertical: 'center',
    borderRadius: 20,
  }, 
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    color: '#95abc0ff',
    marginTop: 24,
},
 
buttonText: {
    fontSize: 22,
    color: '#FF80AB',
    textAlign: 'center',
},
 container : {
     flex: 1, 
     justifyContent: 'center',
     BackgroundColor: '#ecbbbbff',
     padding: 8,  
    }, 
paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },

  entradaImc: {
    flex:1, 
    flexDirection: 'row',
  },

  button: {
    backgroundColor: '#34495e',
    padding: 20,
  }, 

});

export default styles;
