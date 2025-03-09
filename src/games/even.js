import { getRandomNumber } from "../utils.js";

export const desc =
  'Answer "yes" if the number is even, otherwise answer "no".';

export function generateRound() {
  const number = getRandomNumber(1, 100);
  const correctAnswer = number % 2 === 0 ? "yes" : "no";
  return [number, correctAnswer];
}
