import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react-native';
import SearchBar, {type SearchBarProps} from './SearchBar';

const SearchBarMeta: Meta<SearchBarProps> = {
  argTypes: {
    onSearch: {
      action: 'on searched key',
    },
  },
  args: {
    showIcon: true,
    lineless: false,
    debounce: 350,
  },
  title: 'SearchBar',
  component: SearchBar,
};

export default SearchBarMeta;

export const Basic: StoryObj<SearchBarProps> = {};

export const WithList: StoryObj<SearchBarProps> = {
  decorators: [
    (_, options) => {
      const data = Array.from({length: 50}, (_, i) => i + 1);
      const [list, setList] = useState(data);

      function onSearch(text: string) {
        const newList = data.filter(item => item.toString().includes(text));
        setList(newList);
      }

      return (
        <View style={style.container}>
          <SearchBar {...options.args} onSearch={onSearch} />
          <FlatList
            data={list}
            renderItem={({item}) => (
              <View style={style.item_container}>
                <Text style={style.item_text}>{item}</Text>
              </View>
            )}
            keyExtractor={item => item.toString()}
          />
        </View>
      );
    },
  ],
};

const style = StyleSheet.create({
  container: {flex: 1},
  item_container: {
    backgroundColor: '#FFF',
    borderRadius: 6,
    padding: 10,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  item_text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
