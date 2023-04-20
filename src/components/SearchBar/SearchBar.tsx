import {View, TextInput, type TextInputProps, Text} from 'react-native';
import React from 'react';
import styles from './SearchBar.style';

type ExcludedTextInputProps = Pick<TextInputProps, 'placeholder'>;

interface SearchBarProps extends ExcludedTextInputProps {
  showIcon?: boolean;
  lineless?: boolean;
  onSearch: (value: string) => void;
}

function SearchBar({
  showIcon = true,
  lineless = false,
  onSearch,
  placeholder,
}: SearchBarProps) {
  return (
    <View
      testID="searchbar-container"
      style={[styles.container, !lineless && styles.bottom_line]}>
      {showIcon && (
        <Text testID="searchbar-icon" style={styles.icon}>
          🔍
        </Text>
      )}
      <TextInput
        testID="searchbar-input"
        style={styles.input}
        placeholder={placeholder || 'Search...'}
        onChangeText={onSearch}
      />
    </View>
  );
}

export default SearchBar;
