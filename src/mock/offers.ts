import {faker} from '@faker-js/faker';
import {CITY_NAMES, OFFER_TYPES} from '../const.ts';

class Offer {
  id;
  title;
  type;
  price;
  city;
  location;
  isFavorite;
  isPremium;
  rating;
  previewImage;
  #latitude;
  #longitude;

  constructor() {
    [this.#latitude, this.#longitude] = this.#getLocation();

    this.id = faker.string.nanoid();
    this.title = faker.lorem.sentence({ min:  3, max:  7 });
    this.type = faker.helpers.arrayElement(OFFER_TYPES);
    this.price = faker.number.int({ min:  10, max:  1000 });
    this.city = {
      name: faker.helpers.arrayElement(CITY_NAMES),
      location: {
        latitude: this.#latitude,
        longitude: this.#longitude,
        zoom:  13,
      }
    };
    this.location = {
      latitude: this.#latitude,
      longitude: this.#longitude,
      zoom:  16,
    };
    this.isFavorite = faker.datatype.boolean();
    this.isPremium = faker.datatype.boolean();
    this.rating = faker.number.float({ min:  0, max:  5, multipleOf: 0.1 });
    this.previewImage = `https://15.design.htmlacademy.pro/static/hotel/${faker.number.int({ min:  1, max:  20 })}.jpg`;
  }

  #getLocation = () => faker.location.nearbyGPSCoordinate({ origin: [33, -170], radius: 5000, isMetric: true });
}

const getOffers = (offersCount: number) => Array.from({length: offersCount}, () => new Offer());

export {getOffers};
