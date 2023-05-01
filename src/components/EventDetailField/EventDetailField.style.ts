import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width - 20,
    marginHorizontal: 10,
  },
  label: {
    margin: 10,
    marginBottom: 0,
    fontSize: 17,
    fontWeight: 'bold',
  },
  label_container: {
    paddingBottom: 3,
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
