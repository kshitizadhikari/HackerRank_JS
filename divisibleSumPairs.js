divisibleSumPairs.js;

("use strict");

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        count++;
      }
    }
    console.log();
  }

  return count;
}

let arr = [1, 2, 3, 4, 5, 6];
let k = 5;

console.log(divisibleSumPairs(arr.length, k, arr));
