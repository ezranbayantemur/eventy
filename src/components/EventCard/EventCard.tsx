import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import {Event} from '@types';
import styles from './EventCard.style';

interface EventCardProps {
  data: Event;
  onSelect: () => void;
}

const FreeBadge = () => (
  <View testID="eventcard-free-badge" style={styles.freebadge_container}>
    <Text style={styles.freebadge_title}>ÜCRETSİZ</Text>
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
      </View>
    </TouchableWithoutFeedback>
  );
}

export default EventCard;
