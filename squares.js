"use strict";

function squares(a, b) {
    let count = 0;
    let num = 1;
    while (a <= b) {
        num = Math.sqrt(a);
        if (num == Math.floor(num)) {
            count++;
            break;
        }
        a++;
    }
    num = num + 1;

    let square = Math.pow(num, 2);

    while (square <= b) {
        if (square <= b) {
            count++;
        }

        num++;
        square = Math.pow(num, 2);
    }
    return count;
}

let a = 100;
let b = 1000;

squares(a, b);
