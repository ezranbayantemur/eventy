import {StyleSheet} from 'react-native';

export default {
  available: StyleSheet.create({
    container: {
      backgroundColor: '#00BCD4',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
    day_label: {
      color: '#FFF',
      fontSize: 16,
      fontFamily: 'Montserrat-Regular',
    },
    time_label: {
      color: '#FFF',
      fontFamily: 'Montserrat-Bold',
    },
    sell_start_label: {
      color: '#FFF',
      fontSize: 12,
      fontFamily: 'Montserrat-Regular',
    },
    add_to_calendar_button_container: {
      marginTop: 3,
      backgroundColor: '#FFF',
      padding: 7,
      paddingHorizontal: 15,
      borderRadius: 10,
    },
    add_to_calendar_button_text: {
      color: '#00BCD4',
      fontFamily: 'Montserrat-Bold',
    },
    right_container: {
      alignItems: 'center',
    },
  }),
  unavailable: StyleSheet.create({
    container: {
      backgroundColor: '#BDBDBD',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
    day_label: {
      color: '#E8E6E6',
      fontWeight: 'bold',
      fontFamily: 'Montserrat-Regular',
    },
    time_label: {
      color: '#E8E6E6',
      fontFamily: 'Montserrat-Bold',
    },
    sell_start_label: {
      color: '#E8E6E6',
      fontFamily: 'Montserrat-Regular',
      fontSize: 12,
    },
    add_to_calendar_button_container: {
      marginTop: 3,
      backgroundColor: '#A3A3A3',
      padding: 7,
      paddingHorizontal: 15,
      borderRadius: 10,
    },
    add_to_calendar_button_text: {
      color: '#CCCACA',
      fontFamily: 'Montserrat-Bold',
    },
    right_container: {
      alignItems: 'center',
    },
  }),
};
