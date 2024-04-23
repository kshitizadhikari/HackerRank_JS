"use strict";

function findDigits(n) {
    let count = 0;
    let str = n.toString();
    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) continue;

        if (n % arr[i] == 0) count++;
    }

    return count;
}

findDigits(1012);
