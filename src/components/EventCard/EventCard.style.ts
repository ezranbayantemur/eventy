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
    marginTop: 5,
  },
  freebadge_container: {
    position: 'absolute',
    top: '10%',
    left: -3,
    backgroundColor: '#64DD17',
    padding: 3,
    paddingHorizontal: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  freebadge_title: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
