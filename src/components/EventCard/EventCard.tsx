import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import {Event, EventType} from '@types';
import styles from './EventCard.style';

export interface EventCardProps {
  data: Event;
  onSelect: () => void;
}
export interface GenreBadgeProps {
  genre: EventType;
}

const eventTypeToColorMapper: Record<EventType, string> = {
  TİYATRO: '#FF5722',
  KONSER: '#E91E63',
  DİĞER: '#3F51B5',
  SİNEMA: '#4CAF50',
  SERGİ: '#FF9800',
};

const FreeBadge = () => (
  <View testID="eventcard-free-badge" style={styles.free_badge_container}>
    <Text style={styles.free_badge_title}>ÜCRETSİZ</Text>
  </View>
);

const GenreBadge = ({genre}: GenreBadgeProps) => (
  <View
    testID="eventcard-genre-badge"
    style={[
      styles.genre_badge_container,
      {backgroundColor: eventTypeToColorMapper[genre]},
    ]}>
    <Text testID="eventcard-genre-badge-title" style={styles.genre_badge_title}>
      {genre}
    </Text>
  </View>
);

function EventCard({data, onSelect}: EventCardProps) {
  return (
    <TouchableWithoutFeedback testID="eventcard-touchable" onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: data.KucukAfis,
          }}
        />
        <Text style={styles.name}>{data.Adi}</Text>
        {data.UcretsizMi && <FreeBadge />}
        <GenreBadge genre={data.Tur} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default EventCard;
