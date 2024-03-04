import {CommentInterface} from '../types/comment.ts';

const COMMENTS: CommentInterface[] = [
  {
    'offerId': '655253b6-082c-4276-a0e2-15464a0c9d30',
    'id': '3893572c-8c1d-48c8-9933-b3d0e7b1e1a2',
    'comment': 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    'date': '2024-02-09T21:00:00.379Z',
    'rating': 5,
    'user': {
      'name': 'Mollie',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      'isPro': false
    }
  },
  {
    'offerId': 'c5bc3b98-c10a-45e7-b617-93d69ab16712',
    'id': 'a6d4afc6-a8a2-441b-b300-3d20059671c5',
    'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
    'date': '2024-02-10T21:00:00.379Z',
    'rating': 4,
    'user': {
      'name': 'Max',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/1.jpg',
      'isPro': true
    }
  },
  {
    'offerId': 'c5bc3b98-c10a-45e7-b617-93d69ab16712',
    'id': 'efc128ed-48cd-4fe3-a804-34cf2833c241',
    'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    'date': '2024-02-07T21:00:00.379Z',
    'rating': 5,
    'user': {
      'name': 'Inna',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/6.jpg',
      'isPro': false
    }
  },
  {
    'offerId': '0afa3f92-633b-4049-9199-cdd249a9a2f6',
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'rating': 4,
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/3.jpg',
      'isPro': false
    }
  },
];

const getCommentsByOfferId = (offerId: string): CommentInterface[] | [] => {
  const offerComments = COMMENTS.filter((comment) => comment.offerId === offerId);

  if (!offerComments.length) {
    return [];
  }

  return offerComments;
};

export {getCommentsByOfferId};
