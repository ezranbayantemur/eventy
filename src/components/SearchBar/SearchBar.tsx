import {View, TextInput, type TextInputProps, Text} from 'react-native';
import React from 'react';
import styles from './SearchBar.style';
import {useDebouncedCallback} from 'use-debounce';

type ExcludedTextInputProps = Pick<TextInputProps, 'placeholder'>;

export interface SearchBarProps extends ExcludedTextInputProps {
  showIcon?: boolean;
  lineless?: boolean;
  debounce?: number;
  onSearch: (value: string) => void;
}

function SearchBar({
  showIcon = true,
  lineless = false,
  debounce = 250,
  onSearch,
  placeholder,
}: SearchBarProps) {
  const debounced = useDebouncedCallback(value => {
    !!onSearch && onSearch(value);
  }, debounce);

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
        placeholder={placeholder || 'Ara...'}
        onChangeText={debounced}
      />
    </View>
  );
}

export default SearchBar;
