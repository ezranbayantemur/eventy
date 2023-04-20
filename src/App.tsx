import {SafeAreaView} from 'react-native';
import React from 'react';
import SearchBar from './components/SearchBar';
import EventCard from './components/EventCard';
import data from '../__mocks__/event.json';

export default function App() {
  return (
    <SafeAreaView>
      <SearchBar />
      <EventCard data={data} />
    </SafeAreaView>
  );
}
