import {OfferShortInfo, OfferFullInfo} from '../types/offer.ts';

const OFFERS_SHORT_INFO: OfferShortInfo[] = [
  {
    'id': '655253b6-082c-4276-a0e2-15464a0c9d30',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 307,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.380955394,
        'longitude': 4.853096664,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2
  },
  {
    'id': 'c5bc3b98-c10a-45e7-b617-93d69ab16712',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 528,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.380955394,
        'longitude': 4.853096664,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': '31abd117-5027-4adb-8b89-388d1d4a9650',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 923,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.929309666406198,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': '0afa3f92-633b-4049-9199-cdd249a9a2f6',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 123,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.380955394,
        'longitude': 4.853096664,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8
  },
];

const OFFERS_FULL_INFO: OfferFullInfo[] = [
  {
    'id': '655253b6-082c-4276-a0e2-15464a0c9d30',
    'title': 'Amazing and Extremely Central Flat',
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'type': 'apartment',
    'price': 307,
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.380955394,
        'longitude': 4.853096664,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'goods': [
      'Washing machine',
      'Breakfast',
      'Baby seat',
      'Coffee machine',
      'Air conditioning'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 2,
    'bedrooms': 1,
    'maxAdults': 1
  },
  {
    'id': 'c5bc3b98-c10a-45e7-b617-93d69ab16712',
    'title': 'The Pondhouse - A Magical Place',
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'type': 'house',
    'price': 528,
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.380955394,
        'longitude': 4.853096664,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'goods': [
      'Fridge',
      'Baby seat',
      'Dishwasher',
      'Wi-Fi',
      'Kitchen',
      'Breakfast',
      'Towels',
      'Coffee machine',
      'Washer'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 1.1,
    'bedrooms': 2,
    'maxAdults': 3
  },
  {
    'id': '31abd117-5027-4adb-8b89-388d1d4a9650',
    'title': 'Perfectly located Castro',
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'type': 'house',
    'price': 923,
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.380955394,
        'longitude': 4.853096664,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 16
    },
    'goods': [
      'Baby seat',
      'Fridge',
      'Washer',
      'Dishwasher',
      'Laptop friendly workspace',
      'Air conditioning',
      'Breakfast',
      'Wi-Fi',
      'Cable TV',
      'Kitchen',
      'Coffee machine',
      'Washing machine',
      'Towels'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 2.3,
    'bedrooms': 5,
    'maxAdults': 5
  },
  {
    'id': '0afa3f92-633b-4049-9199-cdd249a9a2f6',
    'title': 'Amazing and Extremely Central Flat',
    'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'type': 'apartment',
    'price': 123,
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.380955394,
        'longitude': 4.853096664,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Cable TV',
      'Baby seat',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Dishwasher'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 2.8,
    'bedrooms': 3,
    'maxAdults': 3
  },
];

const getOffersShortInfo = () => OFFERS_SHORT_INFO;
const getFavoriteOffers = () => OFFERS_SHORT_INFO.filter((offer) => offer.isFavorite);
const getOfferFullInfo = (id: string) => OFFERS_FULL_INFO.find((offer) => offer.id === id);

export {getOffersShortInfo, getFavoriteOffers, getOfferFullInfo};
