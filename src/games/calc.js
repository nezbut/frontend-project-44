import { getRandomNumber } from "../utils.js";

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

export const desc = "What is the result of the expression?";

export function generateRound() {
  const a = getRandomNumber(1, 25);
  const b = getRandomNumber(1, 25);
  const operators = ["+", "-", "*"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  return [`${a} ${operator} ${b}`, String(calculate(a, b, operator))];
}
