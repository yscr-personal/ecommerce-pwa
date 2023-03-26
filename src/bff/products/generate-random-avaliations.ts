import {
  generateRandomFloatInRange,
  generateRandomIntegerInRange,
} from '@/utils/random-number-generators';

export function generateRandomAvaliations() {
  return Array.from(
    { length: generateRandomIntegerInRange(0, 1000) },
    (_, index) => ({
      id: index,
      user_id: index,
      rating: generateRandomFloatInRange(0.0, 5.0),
    }),
  );
}
