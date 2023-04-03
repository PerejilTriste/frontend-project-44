#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import { cons } from '@hexlet/pairs';
import { randomNumbers } from '../utilites/random.js';

export function calculator() {
  let correctAnswer = 0;
  const signs = ['+', '-', '*'];
  const fstNumber = randomNumbers(0, 100);
  const secNumber = randomNumbers(0, 100);
  const sig = randomNumbers(0, 2);
  if (signs[sig] === '+') {
    correctAnswer = (fstNumber + secNumber);
  } else if (signs[sig] === '-') {
    correctAnswer = (fstNumber - secNumber);
  } else {
    correctAnswer = (fstNumber * secNumber);
  }

  return cons(`${fstNumber} ${signs[sig]} ${secNumber}`, correctAnswer.toString());
}
