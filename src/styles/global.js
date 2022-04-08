import { StyleSheet } from 'react-native';
export const global = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    minWidth: 200
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00C565',
    height: 40,
    borderRadius: 20,
    width: 150,
    marginTop: 15
  },
  buttonDisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cdcdcd',
    height: 40,
    borderRadius: 20,
    width: 150,
    marginTop: 15
  },
  buttonText: {
    // fontWeight: '500',
    color: 'white',
    fontSize: 22,
  },
  item: {
    padding: 15,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
    borderStyle: 'dashed',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
