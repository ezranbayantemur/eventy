import {Linking, Platform} from 'react-native';
import {EventDetail} from '@types';
import turkishCharParser from '../turkishCharParser/turkishCharParser';

function openEventLocation(eventCenter: EventDetail['EtkinlikMerkezi']) {
  const {KoordinatX, KoordinatY} = eventCenter;

  if (!KoordinatX || !KoordinatY) {
    return;
  }

  const lat = KoordinatX.replace(',', '.');
  const lng = KoordinatY.replace(',', '.');

  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
  const latLng = `${lat},${lng}`;
  const areaLabel = turkishCharParser(eventCenter.Adi.replace(/\s/g, ''));

  console.log(areaLabel.toLocaleLowerCase('en-US'));

  const url = Platform.select({
    ios: `${scheme}${areaLabel}@${latLng}`,
    android: `${scheme}${latLng}(${areaLabel})`,
  });

  Linking.openURL(url!);
}

export default openEventLocation;
