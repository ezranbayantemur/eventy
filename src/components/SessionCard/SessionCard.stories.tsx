import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react-native';
import SessionCard, {type SessionCardProps} from './SessionCard';
import type {Session} from '@types';

import session from '../../../__mocks__/session.json';
import list from '../../../__mocks__/sessionList.json';

const mockSession = session as Session;
const mockSessionList = list as Session[];

const SessionCardMeta: Meta<SessionCardProps> = {
  args: {
    data: {...mockSession, DolulukOranı: 50},
  },
  title: 'SessionCard',
  component: SessionCard,
};

export default SessionCardMeta;

export const Basic: StoryObj<SessionCardProps> = {};

export const Unavailable: StoryObj<SessionCardProps> = {
  args: {
    data: mockSession,
  },
};

export const WithList: StoryObj<SessionCardProps> = {
  decorators: [
    _ => (
      <View style={style.container}>
        <FlatList
          keyExtractor={item => item.BiletSatisAciklama}
          data={mockSessionList}
          renderItem={({item}) => <SessionCard data={item} />}
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
