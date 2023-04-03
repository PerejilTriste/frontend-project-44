#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import { cons } from '@hexlet/pairs';
import { randomNumbers } from '../utilites/random.js';

export function progress() {
  const fstNumber = randomNumbers(0, 10);
  const addNum = randomNumbers(0, 10);
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(fstNumber + addNum * i);
  }

  const hideSymbols = Math.round(Math.random() * (progression.length - 1));
  const correctAnswer = progression[hideSymbols];
  progression[hideSymbols] = '..';

  return cons(progression.join(' '), correctAnswer.toString());
}
