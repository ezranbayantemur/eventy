import {View, Text} from 'react-native';
import React from 'react';
import AutoHeightWebView, {
  AutoHeightWebViewProps,
} from 'react-native-autoheight-webview';
import styles from './EventDetailField.style';

export interface EventDetailFieldProps {
  label: string;
  content: string;
  webviewProps?: AutoHeightWebViewProps;
}

function EventDetailField({
  label,
  content,
  webviewProps,
}: EventDetailFieldProps) {
  return (
    <React.Fragment>
      <View style={styles.label_container}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <AutoHeightWebView
        style={styles.container}
        scalesPageToFit={true}
        viewportContent="width=device-width, user-scalable=no"
        source={{html: content}}
        {...webviewProps}
      />
    </React.Fragment>
  );
}

export default EventDetailField;
