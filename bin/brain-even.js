#!/usr/bin/env node

import { getName } from "../src/cli.js";
import { startGame } from "../src/evenCore.js";

console.log("Welcome to the Brain Games!");
const userName = getName();
console.log(`Hello, ${userName}`);
startGame(userName);
