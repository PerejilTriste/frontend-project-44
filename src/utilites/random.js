/* eslint-disable import/prefer-default-export */
export function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
