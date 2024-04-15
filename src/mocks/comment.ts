import {faker} from '@faker-js/faker';
import {CommentData} from '../types/comment.ts';

export const getMockComment = (): CommentData => ({
  id: faker.string.uuid(),
  comment: faker.lorem.words(),
  date: faker.date.past().toISOString(),
  rating: faker.number.int({ min: 1, max: 5 }),
  user: {
    name: faker.person.fullName(),
    avatarUrl: faker.image.avatar(),
    isPro: faker.datatype.boolean(),
  },
});
