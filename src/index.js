import { getAnswer, getName } from './cli.js';

export function helloUser() {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}`);
  return userName;
}

export function startGame(desc, generateRound) {
  const userName = helloUser();
  console.log(desc);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    const userAnswer = getAnswer(`Question: ${question}`).toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}
