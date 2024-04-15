import {faker} from '@faker-js/faker';
import {getRandomElement} from '../utils/common.ts';
import {CITIES} from '../const.ts';
import {OfferFullInfo, OfferShortInfo} from '../types/offer.ts';

export const getMockShortOffer = (isFavorite = false): OfferShortInfo => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(),
  type: faker.helpers.arrayElement(['hotel', 'apartment', 'house']),
  price: faker.number.int({ min: 50, max: 1000 }),
  previewImage: faker.image.url(),
  city: {
    name: getRandomElement(CITIES).name,
    location: {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      zoom: faker.number.int({ min: 10, max: 15 })
    }
  },
  location: {
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
    zoom: faker.number.int({ min: 10, max: 15 })
  },
  isFavorite,
  isPremium: faker.datatype.boolean(),
  rating: faker.number.float({ min: 1, max: 5 })
});

export const getMockFullOffer = (): OfferFullInfo => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  type: faker.helpers.arrayElement(['hotel', 'apartment', 'house']),
  price: faker.number.int({min: 50, max: 990}),
  city: {
    name: getRandomElement(CITIES).name,
    location: {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      zoom: faker.number.int({min: 8, max: 12})
    }
  },
  location: {
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
    zoom: faker.number.int({min: 8, max: 12})
  },
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  rating: faker.number.float({min: 1, max: 5}),
  description: faker.lorem.paragraph(),
  bedrooms: faker.number.int({min: 1, max: 6}),
  goods: Array.from({length: faker.number.int({min: 0, max: 10})}, () => faker.lorem.word()),
  host: {
    name: faker.person.fullName(),
    avatarUrl: faker.image.avatar(),
    isPro: faker.datatype.boolean()
  },
  images: Array.from({length: faker.number.int({min: 0, max: 10})}, () => faker.image.url()),
  maxAdults: faker.number.int({min: 1, max: 10})
});
