import React from 'react';
import {TouchableOpacity, Text, type TouchableOpacityProps} from 'react-native';
import styles from './Button.style';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button = ({text, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity
      testID="button-pressable"
      style={styles.container}
      {...props}>
      <Text testID="button-text" style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
