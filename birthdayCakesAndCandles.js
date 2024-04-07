"use strict";

function birthdayCakeCandles(candles) {
  let max = candles[0];
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
      count = 1;
    } else if (candles[i] == max) {
      count++;
    }
  }
  return count;
}

let candles = [4, 4, 1, 3];
console.log(birthdayCakeCandles(candles));
