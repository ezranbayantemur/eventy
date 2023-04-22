import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import EventCard, {type EventCardProps} from './EventCard';
import list from '../../../__mocks__/eventList.json';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {Event} from '@types';

const eventList = list as Event[];

const EventCardMeta: Meta<EventCardProps> = {
  argTypes: {
    onSelect: {
      action: 'on selection',
    },
  },
  args: {
    data: {
      Adi: 'Event Name',
      UcretsizMi: true,
      KucukAfis: 'https://via.placeholder.com/150',
      BiletSatisLinki: 'https://www.google.com',
      EtkinlikBaslamaTarihi: '2021-01-01T00:00:00',
      EtkinlikBitisTarihi: '2021-01-01T00:00:00',
      EtkinlikMerkezi: 'Event Center',
      EtkinlikUrl: 'https://www.google.com',
      Id: 1,
      KisaAciklama: 'Short Description',
      Resim: 'https://via.placeholder.com/150',
      Tur: 'DİĞER',
    },
  },
  title: 'EventCard',
  component: EventCard,
};

export default EventCardMeta;

export const Basic: StoryObj<EventCardProps> = {};

export const FreeEvent: StoryObj<EventCardProps> = {
  decorators: [
    (_, options) => (
      <EventCard
        data={{
          ...options.args.data,
          UcretsizMi: false,
        }}
        onSelect={options.args.onSelect}
      />
    ),
  ],
};

export const WithList: StoryObj<EventCardProps> = {
  decorators: [
    (_, options) => (
      <View style={style.container}>
        <FlatList
          keyExtractor={item => item.Id.toString()}
          data={eventList}
          renderItem={({item}) => (
            <EventCard data={item} onSelect={options.args.onSelect} />
          )}
        />
      </View>
    ),
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
