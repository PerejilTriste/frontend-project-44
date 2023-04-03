#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import { cons } from '@hexlet/pairs';
import { randomNumbers } from '../utilites/random.js';

export function parityCheck() {
  const nums = randomNumbers(1, 50);
  let corrAnswer = '';
  if (nums % 2 === 0) {
    corrAnswer = 'yes';
  } else {
    corrAnswer = 'no';
  }
  return cons(nums, corrAnswer);
}
