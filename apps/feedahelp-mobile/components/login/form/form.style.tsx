import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles/global';

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
    margin: 0,
    marginHorizontal: 20,
    width: '100%',
    maxWidth: 500,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
  linkText: {
    color: Colors.primary,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
