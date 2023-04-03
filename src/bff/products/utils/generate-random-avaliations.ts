import { faker } from '@faker-js/faker';

export function generateRandomAvaliations() {
  return Array.from(
    { length: faker.datatype.number({ min: 10, max: 1000 }) },
    (_, index) => ({
      id: index,
      user_id: index,
      rating: faker.datatype.number({ min: 0, max: 5, precision: 0.5 }),
      comment: faker.lorem.sentences(5, '\n'),
    }),
  );
}
