"use strict";

function beautifulDays(i, j, k) {
    let count = 0;
    for (let a = i; a <= j; a++) {
        let original = a;
        let rev = 0;
        let r;
        while (original > 0) {
            r = original % 10;
            rev = rev * 10 + r;
            original = Math.floor(original / 10);
        }
        if (Math.abs(a - rev) % k === 0) count++;
    }
    return count;
}

beautifulDays(20, 23, 6);
