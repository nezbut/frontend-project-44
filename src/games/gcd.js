import { getRandomNumber } from '../utils.js';

function calculateGCD(x, y) {
  let a = x;
  let b = y;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export const desc = 'Find the greatest common divisor of given numbers.';

export function generateRound() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const correctAnswer = String(calculateGCD(num1, num2));
  return [`${num1} ${num2}`, correctAnswer];
}
