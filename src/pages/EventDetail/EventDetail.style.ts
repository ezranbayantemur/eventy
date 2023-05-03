import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  background_image: {
    width: '100%',
    height: 300,
  },
  event_name: {
    margin: 10,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  event_place_name: {
    margin: 10,
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  event_info: {
    width: width - 20,
    marginHorizontal: 10,
  },
  event_place: {
    height: height * 0.5,
    width: width - 20,
    marginHorizontal: 10,
  },
});
