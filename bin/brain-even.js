#!/usr/bin/env node

import { parityCheck } from '../src/games/brain-even.js';
import { startGame } from '../src/index.js';

startGame('Answer "yes" if the number is even, otherwise answer "no".', parityCheck);
