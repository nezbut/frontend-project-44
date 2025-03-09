import redlineSync from 'readline-sync';

export function getName() {
  return redlineSync.question('May I have your name? ');
}

export function getAnswer(question) {
  return redlineSync.question(`${question}\nYour answer: `);
}
