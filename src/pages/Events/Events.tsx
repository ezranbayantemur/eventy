import React from 'react';
import {SafeAreaView, FlatList, type ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Event} from '@types';
import {EventCard, Loading, Error, SearchBar} from '@components';
import {useGetEventsQuery} from '@redux/api/events';

export default function Events() {
  const navigation = useNavigation<any>();
  const {data, error, isLoading, refetch} = useGetEventsQuery();
  const [eventList, setEventList] = React.useState<Event[] | undefined>();

  React.useEffect(() => {
    setEventList(data);
  }, [data]);

  const handleEventSelect = (Id: number) =>
    navigation.navigate('EventDetail', {Id});

  const renderEvent: ListRenderItem<Event> = ({item}) => (
    <EventCard data={item} onSelect={() => handleEventSelect(item.Id)} />
  );

  const handleSearch = (text: string) => {
    const filteredEvents = data?.filter(event =>
      event.Adi.toLowerCase().includes(text.toLowerCase()),
    );
    setEventList(filteredEvents);
  };

  if (isLoading) {
    return <Loading text="Etkinlikler yükleniyor.." />;
  }
  if (error) {
    return <Error text="Etkinlikler yüklenirken bir hata oluştu." />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={eventList}
        renderItem={renderEvent}
        refreshing={isLoading}
        onRefresh={refetch}
        ListHeaderComponent={<SearchBar onSearch={handleSearch} />}
      />
    </SafeAreaView>
  );
}
