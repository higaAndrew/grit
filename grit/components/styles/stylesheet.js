import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  screen: {
    padding: 25,
  },
  default: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      alignContent: 'spaceBetween',
  },
});

export default styles;