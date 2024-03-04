interface CommentInterface {
  'offerId'?: string;
  'id': string;
  'comment': string;
  'date': string;
  'rating': number;
  'user': {
    'name': string;
    'avatarUrl': string;
    'isPro': boolean;
  };
}

export type {CommentInterface};
