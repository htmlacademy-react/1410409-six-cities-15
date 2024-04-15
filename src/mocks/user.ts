import {faker} from '@faker-js/faker';
import {UserAuthData, UserInfo} from '../types/user.ts';

export const getMockUserInfo = (email = faker.internet.email()): UserInfo => ({
  name: faker.person.fullName(),
  avatarUrl: faker.image.avatar(),
  isPro: faker.datatype.boolean(),
  email,
  token: faker.string.uuid(),
});

export const getMockUserAuthData = (email = faker.internet.email()): UserAuthData => ({
  email,
  password: faker.internet.password(),
});
