#!/usr/bin/env node

import { primeNumbers } from '../src/games/brain-prime.js';
import { startGame } from '../src/index.js';

startGame('Answer "yes" if given number is prime. Otherwise answer "no".', primeNumbers);
