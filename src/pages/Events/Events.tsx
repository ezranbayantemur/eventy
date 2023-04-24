import React from 'react';
import {SafeAreaView, FlatList, type ListRenderItem} from 'react-native';
import {Event} from '@types';
import {EventCard, Loading, Error} from '@components';
import {useGetEventsQuery} from '@redux/api/events';

export default function Events() {
  const {data, error, isLoading, refetch} = useGetEventsQuery();

  const handleEventSelect = () => null;

  const renderEvent: ListRenderItem<Event> = ({item}) => (
    <EventCard data={item} onSelect={handleEventSelect} />
  );

  if (isLoading) {
    return <Loading text="Etkinlikler yükleniyor.." />;
  }
  if (error) {
    return <Error text="Etkinlikler yüklenirken bir hata oluştu." />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderEvent}
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </SafeAreaView>
  );
}
