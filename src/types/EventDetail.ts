import type {EventType} from '@types';

interface EventCenter {
  Id: number;
  Hakkinda: string;
  KoordinatY: string;
  KoordinatX: string;
  Iletisim: string;
  Telefon: string;
  Adres: string;
  Resim: string;
  Ulasim: string;
  Adi: string;
  Aciklama: string;
}

export interface Session {
  DolulukOranı: number;
  BiletSatisAciklama: string;
  SeansBitisTarihi: string;
  UcretsizMi: boolean;
  BiletSatisLinki: string;
  SatisaSunusTarihi: string;
  SeansBaslangicTarihi: string;
}

export interface EventDetail {
  Tur: EventType;
  Aciklama: string;
  Id: number;
  Adi: string;
  KucukAfis: string;
  Resim: string;
  AciklamaOzeti: string;
  EtkinlikUrl: string;
  EtkinlikMerkezi: EventCenter;
  SeansListesi: Session[];
}
