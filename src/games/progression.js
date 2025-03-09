import getRandomNumber from '../utils.js';

function generateProgression(start, step, length) {
  return Array.from({ length }, (_, i) => start + step * i);
}

export const desc = 'What number is missing in the progression?';

export function generateRound() {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = generateProgression(start, step, length);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  return [progression.join(' '), answer];
}
