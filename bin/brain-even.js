#!/usr/bin/env node

import { generateRound, desc } from '../src/games/even.js'
import { startGame } from '../src/index.js'

startGame(desc, generateRound)
