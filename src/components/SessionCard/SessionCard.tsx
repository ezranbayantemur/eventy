import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Session} from '@types';
import {format, isSameDay} from 'date-fns';
import RNCalendarEvents from 'react-native-calendar-events';

import styles from './SessionCard.style';

export interface SessionCardProps {
  eventName: string;
  data: Session;
}

function SessionCard({eventName, data}: SessionCardProps) {
  const isAvailable = data.DolulukOranı !== 100;
  const cardStyle = styles[isAvailable ? 'available' : 'unavailable'];

  const sellStartDay = format(new Date(data.SatisaSunusTarihi), 'dd MMM HH:mm');
  const date = format(new Date(data.SeansBaslangicTarihi), 'dd MMM yyyy');
  const isInDifferentDay = !isSameDay(
    new Date(data.SeansBaslangicTarihi),
    new Date(data.SeansBitisTarihi),
  );
  const startTime = format(
    new Date(data.SeansBaslangicTarihi),
    isInDifferentDay ? 'dd MMM HH:mm' : 'HH:mm',
  );
  const endTime = format(
    new Date(data.SeansBitisTarihi),
    isInDifferentDay ? 'dd MMM HH:mm' : 'HH:mm',
  );

  const handleAddToCalendar = async () => {
    const permissionStatus = await RNCalendarEvents.checkPermissions();

    if (permissionStatus === 'undetermined') {
      await RNCalendarEvents.requestPermissions();
    }

    if (permissionStatus === 'denied' || permissionStatus === 'restricted') {
      return Alert.alert('eventy', 'Takvim izni verilmedi.');
    }

    if (permissionStatus === 'authorized') {
      try {
        await RNCalendarEvents.saveEvent(eventName, {
          startDate: `${data.SeansBaslangicTarihi}.000Z`,
          endDate: `${data.SeansBitisTarihi}.000Z`,
        });
        Alert.alert('eventy', 'Etkinlik takviminize eklendi.');
      } catch (error) {
        Alert.alert('eventy', 'Takvime eklenirken bir hata oluştu.');
      }
    }
  };

  return (
    <View style={cardStyle.container}>
      <View>
        <Text style={cardStyle.day_label}>{date}</Text>
        {!data.UcretsizMi && (
          <Text style={cardStyle.sell_start_label}>
            Bilet Satış: {sellStartDay}
          </Text>
        )}
      </View>
      <View style={cardStyle.right_container}>
        <Text style={cardStyle.time_label}>
          {startTime} - {endTime}
        </Text>
        <TouchableOpacity
          disabled={!isAvailable}
          onPress={handleAddToCalendar}
          style={cardStyle.add_to_calendar_button_container}>
          <Text style={cardStyle.add_to_calendar_button_text}>
            Takvime Ekle
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SessionCard;
