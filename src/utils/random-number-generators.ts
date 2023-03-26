export function generateRandomIntegerInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomFloatInRange(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}
