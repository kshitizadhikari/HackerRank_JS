"use strict";

function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    for (let i = 0; i < b[1]; i++) {
        for (let j = 0; j < b[2]; j++) {
            let current = keyboards[i] + drives[j];

            if (current > max && current <= b) {
                max = current;
            }
        }
    }
    return max;
}

let b = 10;
let keyboards = [3, 1];
let drives = [5, 2, 8];

console.log(getMoneySpent(keyboards, drives, b));
