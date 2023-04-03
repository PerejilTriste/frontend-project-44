#!/usr/bin/env node

import { gcdGame } from '../src/games/brain-gcd.js';
import { startGame } from '../src/index.js';

startGame('Find the greatest common divisor of given numbers.', gcdGame);
