import {OfferShortInfo, OfferFullInfo} from '../types/offer.ts';

const OFFERS_SHORT_INFO: OfferShortInfo[] = [
  {
    'id': 'c994b8d8-5425-4ac1-afc5-83a58021cb75',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 324,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': 'f7fa7b71-004e-4f33-959b-cb9944eccd12',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 275,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': 'a54a5970-356c-410b-bbc0-cdaae9eb866e',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'hotel',
    'price': 329,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.934361,
      'longitude': 6.943974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': '68f71f21-1a94-444a-8f3c-284cb6446b12',
    'title': 'Tile House',
    'type': 'house',
    'price': 802,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8
  },
  {
    'id': '06c3555b-0752-43df-ad7b-7c973552b404',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 240,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.957361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': '4f29bce0-e72d-4a5b-84b5-26b7b80febfd',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 301,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.951361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1
  },
  {
    'id': '0a48ad96-81df-43be-84f9-6608b30f0ea9',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 159,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.959361,
      'longitude': 6.978974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': 'cc801bd7-68df-480f-9f5f-b6084bfb8f47',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 324,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.960974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '203f83bf-7b3d-44d4-9955-b6a785394211',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 145,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.954361,
      'longitude': 6.982974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': '736e1ca2-f771-4fe4-b48c-a46ccc86c9a8',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 342,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.962974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.6
  },
  {
    'id': 'c7f257e8-d6a9-420c-99ff-6134d7a62b18',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 211,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.917361,
      'longitude': 6.977974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': '11dafbb5-45aa-4d48-8263-112033adcd74',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 942,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.935974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3
  },
  {
    'id': '53518427-5b12-4563-acef-76d0eb3bcb12',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 350,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': 'd290e408-6797-42c7-8e5a-aca60f695ba4',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 427,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': '33b61a8e-cdbc-4e80-93cc-68a36d3f0148',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 142,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.822556999999996,
      'longitude': 4.347697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '66894dec-8af7-4630-adb4-19131d1cd67c',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 230,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.357697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.4
  },
  {
    'id': 'a2baa3f4-cb6a-4cb7-9717-121749833440',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 204,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.363696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8
  },
  {
    'id': 'd1882a99-4b05-46d5-864d-9472db885664',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 197,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36554,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': 'cd3a717b-d364-412e-b798-0c00f9d48f28',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 811,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': 'c1d3e3a4-b459-4a0f-b29f-4bd21b8ea6d0',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 432,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.397540000000006,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.3
  },
  {
    'id': '09264438-c4b6-472a-ae19-8c33647eae6d',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 256,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37454,
      'longitude': 4.881976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 5
  },
  {
    'id': '4e1c8df9-ca15-4d48-8883-24b9d2d02500',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 145,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.367540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.4
  },
  {
    'id': 'c37dc428-d079-4d65-8bc7-ce8ac2f6fa36',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 147,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.361540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': 'a674e9f8-08a3-47cd-b89d-c122644c7864',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 464,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.389540000000004,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': '9ee3adfc-30bb-4d65-9502-afba880158ff',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 309,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35054,
      'longitude': 4.908976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4
  },
  {
    'id': '17d51e8e-b755-4eb8-baff-b6334e1b4c92',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 492,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37154,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
  {
    'id': 'f6df4685-fe57-42e6-b0f3-8d76583cfb21',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 246,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.364540000000005,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': 'c0a98a4e-4c8a-4812-9ae6-cf92664b0fc5',
    'title': 'Waterfront with extraordinary view',
    'type': 'house',
    'price': 371,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.6
  },
  {
    'id': '719c74b3-69b4-4aef-8b97-5d71f1a2060e',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 302,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': 'a8c83622-8c40-4ec1-826a-a3ec04b595b7',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 100,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.388540000000006,
      'longitude': 4.899976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8
  },
  {
    'id': '8d5e6777-71cb-4e31-afd6-3b817e1e18ab',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 265,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36954,
      'longitude': 4.914976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '75babdaf-e661-4bde-8de6-2e85ec851448',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 377,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37554,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': '7873f6c7-b8e7-4f1b-ae55-7a17f79d189a',
    'title': 'Tile House',
    'type': 'house',
    'price': 557,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.886976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': '467f990d-51a6-4be6-b2a1-5d8f31494c9b',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 166,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 10.018654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '0555dddd-5c10-431e-b9b5-11590fab8faa',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 190,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.538341,
      'longitude': 9.976654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  },
  {
    'id': '2486d121-6167-4a1c-b32e-9cd02910b3ba',
    'title': 'Tile House',
    'type': 'room',
    'price': 226,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 10.019654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '7b02e5bf-d45c-475e-816b-88fabdd69e3d',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 213,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.529341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.8
  },
  {
    'id': '61163930-cf75-4ad7-830f-d5f2aec35eb8',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 260,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.565341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8
  },
  {
    'id': '73119400-5a51-411e-a0cc-1323627ada91',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 288,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.217402,
      'longitude': 6.7693140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.9
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
        'latitude': 52.37454,
        'longitude': 4.897976,
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
        'latitude': 52.37454,
        'longitude': 4.897976,
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
        'latitude': 52.37454,
        'longitude': 4.897976,
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
        'latitude': 52.37454,
        'longitude': 4.897976,
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
