#!/usr/bin/env node

import { generateRound, desc } from '../src/games/gcd.js'
import { startGame } from '../src/index.js'

startGame(desc, generateRound)
