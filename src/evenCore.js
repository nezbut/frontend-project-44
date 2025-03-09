import { getAnswer } from "./cli.js";

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateRound() {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = number % 2 === 0 ? "yes" : "no";
  return [number, correctAnswer];
}

export function startGame(userName) {
  console.log(desc);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const [question, correctAnswer] = generateRound();
    const userAnswer = getAnswer(`Question: ${question}`).toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log("Correct!");
  }

  console.log(`Congratulations, ${userName}!`);
}
