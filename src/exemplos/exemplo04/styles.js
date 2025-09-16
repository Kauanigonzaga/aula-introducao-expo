import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#fff',
    alignItems: 'center',
  },
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
    borderWidth: 1,
    borderColor: 'deepskyblue',
    width: '90%',
    height: 100,
    padding : 10,
},
 txtBotao: {
    color: 'pink',
    fontSize: RFPercentage(2),
    borderRadius: 20,
    marginTop: 30,
  }, 
  botao: {
    backgroundColor: 'darkslateblue',
    with: '75%',
    borderRadius: RFPercentage(2),
    padding: RFPercentage(1),
    justifyContent: 'center',
    alignItems: 'center', 
    margin: RFPercentage(2),
  }
}
);


export default styles;
