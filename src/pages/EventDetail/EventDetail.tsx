import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Linking,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {useGetEventDetailQuery} from '@redux/api/events';
import {
  Loading,
  Error,
  Button,
  EventDetailField,
  SessionCard,
} from '@components';
import {checkContentIsValid, openEventLocation} from '@utils';
import styles from './EventDetail.style';

const baseEventURL = 'https://kultursanat.izmir.bel.tr/Etkinlikler/';

export default function EventDetail() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const {data, error, isLoading} = useGetEventDetailQuery({
    id: route.params.Id,
  });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: data?.Adi || '',
    });
  }, [navigation, data?.Adi]);

  if (isLoading) {
    return <Loading text="Etkinlik detayı yükleniyor.." />;
  }
  if (error) {
    return <Error text="Etkinlik detayı yüklenirken bir hata oluştu." />;
  }

  if (!data) {
    return null;
  }

  const handleOpenLocation = () => {
    openEventLocation(data.EtkinlikMerkezi);
  };

  const handleOpenExternalLink = async () => {
    const url = baseEventURL + data.EtkinlikUrl;
    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      await Linking.openURL(url);
    }
  };

  const {Hakkinda, Ulasim, Iletisim, Adres, KoordinatX, KoordinatY} =
    data.EtkinlikMerkezi;

  const hasEventPlaceInfo = checkContentIsValid(Hakkinda);
  const hasEventPlaceTransport = checkContentIsValid(Ulasim);
  const hasEventPlaceContact = checkContentIsValid(Iletisim);
  const hasEventPlaceAddress = checkContentIsValid(Adres);
  const hasEventPlaceCoordinates = KoordinatX && KoordinatY;
  const hasSessions = data.SeansListesi.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.background_image}
          source={{uri: data.Resim}}
          blurRadius={2}>
          <Image
            style={styles.image}
            source={{uri: data.Resim}}
            resizeMode="contain"
          />
        </ImageBackground>
        <Text style={styles.event_name}>{data.Adi}</Text>
        <AutoHeightWebView
          style={styles.event_info}
          scalesPageToFit={true}
          scrollEnabled={false}
          viewportContent="width=device-width, user-scalable=no"
          source={{html: data.Aciklama}}
        />
        {hasSessions &&
          data.SeansListesi.map(session => (
            <SessionCard
              key={session.BiletSatisAciklama}
              eventName={data.Adi}
              data={session}
            />
          ))}
        {hasEventPlaceInfo && (
          <EventDetailField
            label={`Etkinlik Yeri: ${data.EtkinlikMerkezi.Adi}`}
            content={data.EtkinlikMerkezi.Hakkinda}
            webviewProps={{
              style: styles.event_place,
            }}
          />
        )}
        {hasEventPlaceAddress && (
          <EventDetailField
            label="Adres"
            content={data.EtkinlikMerkezi.Adres}
          />
        )}
        {hasEventPlaceTransport && (
          <EventDetailField
            label="Ulaşım"
            content={data.EtkinlikMerkezi.Ulasim}
          />
        )}
        {hasEventPlaceContact && (
          <EventDetailField
            label="İletişim"
            content={data.EtkinlikMerkezi.Iletisim}
          />
        )}

        {hasEventPlaceCoordinates && (
          <Button text="Adrese Git" onPress={handleOpenLocation} />
        )}

        <Button
          text="Etkinlik Sayfasına Git"
          onPress={handleOpenExternalLink}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
