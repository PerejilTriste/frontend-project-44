#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import { cons } from '@hexlet/pairs';
import { randomNumbers } from '../utilites/random.js';

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

export function gcdGame() {
  const fstNumber = randomNumbers(0, 100);
  const secNumber = randomNumbers(0, 100);
  const correctAnswer = gcd(fstNumber, secNumber);
  return cons(`${fstNumber} ${secNumber}`, correctAnswer.toString());
}
