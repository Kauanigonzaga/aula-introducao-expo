import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,
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
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
  },
  txt: {
    fontSize: RFPercentage(2.2),
  },

  botao: {
    flexDirection: 'row',
    backgroundColor: 'deepskyblue', 
    borderRadius: 20,
    padding: 10,  
    alignItems: 'center',
    marginTop: 10,
  },  
  txtBotao: {
    color: 'pink',
    fontSize: RFPercentage(2),
    textAlign: 'center'

}}
);

export default styles;
