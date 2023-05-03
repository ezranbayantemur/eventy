import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  image: {
    height: 200,
    borderRadius: 5,
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    marginTop: 5,
    fontSize: 16,
  },
  free_badge_container: {
    position: 'absolute',
    top: '10%',
    left: -3,
    backgroundColor: '#64DD17',
    padding: 3,
    paddingHorizontal: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  free_badge_title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
  genre_badge_container: {
    position: 'absolute',
    bottom: '20%',
    right: -3,
    backgroundColor: '#8E24AA',
    padding: 3,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  genre_badge_title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
});
