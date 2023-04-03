#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export function startGame(textQuestion, getQuestion) {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  console.log(textQuestion);
  let correct = 0;

  while (correct < 3) {
    const questionPair = getQuestion();
    const question = car(questionPair);
    const correctAnswer = cdr(questionPair);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      correct += 1;
      console.log('Correct!');
    } else {
      console.log(`Your answer: '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
}
