import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default styles;
