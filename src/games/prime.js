import { getRandomNumber } from '../utils.js';

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

export const desc =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

export function generateRound() {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [String(number), correctAnswer];
}
