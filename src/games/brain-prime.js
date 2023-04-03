#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import { cons } from '@hexlet/pairs';
import { randomNumbers } from '../utilites/random.js';

function prime(nums) {
  if (nums < 2) {
    return false;
  } if (nums === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(nums);
  while (i <= limit) {
    if (nums % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
}

export function primeNumbers() {
  const num = randomNumbers(0, 100);
  let correctAns = '';
  if (prime(num)) {
    correctAns = 'yes';
  } else {
    correctAns = 'no';
  }

  return cons(num, correctAns);
}
