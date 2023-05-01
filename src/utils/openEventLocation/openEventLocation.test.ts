import openEventLocation from './openEventLocation';
import {EventDetail} from '@types';

const mockEventCenter: EventDetail['EtkinlikMerkezi'] = {
  Id: 1,
  Hakkinda: 'test_description',
  Iletisim: 'test_contact',
  Telefon: 'test_phone',
  Adres: 'test_address',
  Resim: 'test_image',
  Ulasim: 'test_transport',
  Adi: 'test_name',
  Aciklama: 'test_description',
  KoordinatX: 'test_lat',
  KoordinatY: 'test_lng',
};

const mockOpenURL = jest.fn();
jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: mockOpenURL,
}));

describe('checkContentIsValid unit tests', () => {
  it('should not trigger linking if data is invalid', () => {
    openEventLocation({...mockEventCenter, KoordinatX: '', KoordinatY: ''});

    expect(mockOpenURL).not.toHaveBeenCalled();
  });

  it('should return true if field is valid type', () => {
    const expectedURL = 'maps:0,0?q=test_name@32.1234,24.356';
    openEventLocation({
      ...mockEventCenter,
      KoordinatX: '32,1234',
      KoordinatY: '24,356',
    });

    expect(mockOpenURL).toHaveBeenCalledWith(expectedURL);
  });
});
