"use strict";

function bonAppetit(bill, k, b) {
    let sum = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i != k) {
            sum += bill[i];
        }
    }
    console.log("Bill Total: " + sum);
    let actual = sum / 2;
    console.log("Anna Total: " + actual);

    if (b == actual) {
        return "BonAppetit";
    } else return b - actual;
}

let bill = [3, 1, 0, 2, 9];
let abc = [2, 4, 6];

console.log(bonAppetit(bill, 1, 12));
