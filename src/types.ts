export type Language = 'hy' | 'en';

export type ScreenType = 'home' | 'menu' | 'specialty' | 'story' | 'location';

export type DonutCategory = 'all' | 'glaze' | 'cream' | 'seasonal' | 'savory';

export interface DonutItem {
  id: string;
  code: string;
  nameHy: string;
  nameEn: string;
  category: DonutCategory;
  price: number;
  rating: number;
  reviewsCount: number;
  descriptionHy: string;
  descriptionEn: string;
  badgeHy: string;
  badgeEn: string;
  image: string;
  altText: string;
  ingredientsHy: string[];
  ingredientsEn: string[];
  allergensHy: string[];
  allergensEn: string[];
  calories?: number;
  recommendedPairing?: string;
}

export interface CoffeeItem {
  id: string;
  name: string;
  originHy: string;
  originEn: string;
  scaScore: number;
  processHy: string;
  processEn: string;
  altitudeHy: string;
  altitudeEn: string;
  roastHy: string;
  roastEn: string;
  acidity: number; // 1-5
  body: number; // 1-5
  notesHy: string[];
  notesEn: string[];
  price: number;
  brewMethods: string[];
  descriptionHy: string;
  descriptionEn: string;
}

export interface PairingItem {
  id: string;
  number: string;
  titleHy: string;
  titleEn: string;
  nameHy: string;
  nameEn: string;
  descHy: string;
  descEn: string;
  price: number;
  donutNameHy: string;
  coffeeNameHy: string;
}

export interface CartItem {
  id: string;
  nameHy: string;
  nameEn: string;
  price: number;
  quantity: number;
  image?: string;
  type: 'donut' | 'coffee' | 'pairing';
  customNotes?: string;
}

export interface ReservationData {
  id: string;
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes?: string;
  timestamp: number;
}
