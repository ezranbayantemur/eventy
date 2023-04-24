import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  type ActivityIndicatorProps,
} from 'react-native';
import styles from './Loading.style';

export interface LoadingProps extends ActivityIndicatorProps {
  text?: string;
}

const Button = ({text, ...props}: LoadingProps) => {
  return (
    <View style={styles.container} {...props}>
      <ActivityIndicator size="large" />
      {!!text && (
        <Text testID="loading-text" style={styles.text}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default Button;
