import React from 'react';
import {View, Text} from 'react-native';
import styles from './Error.style';

export interface ErrorProps {
  text?: string;
}

const Button = ({text}: ErrorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>❌</Text>
      <Text style={styles.text}>{text || 'Bir hata oluştu!'}</Text>
    </View>
  );
};

export default Button;
