#!/usr/bin/env node

import { progress } from '../src/games/brain-progression.js';
import { startGame } from '../src/index.js';

startGame('What number is missing in the progression?', progress);
