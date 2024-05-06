"use strict";

function appendAndDelete(s, t, k) {
    let x = s.split("");
    let y = t.split("");
    let flag = 0;
    let commonCount = 0;
    let noOfDeletesRequired = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] == y[i]) {
            commonCount++;
        } else {
            break;
        }
    }

    noOfDeletesRequired = x.length - commonCount;

    k = k - noOfDeletesRequired;
    let temp = x.slice(0, commonCount);
    while (k >= 0) {
        if (commonCount < y.length) {
            temp.push(y[commonCount]);
        } else {
            break;
        }
        commonCount++;
        k--;
    }

    if (temp.length === y.length && k >= 0) flag = 1;

    return flag == 1 ? "Yes" : "No";
}

let s = ["a", "b", "c"];
let t = ["d", "e", "f"];

let a = "aba";
let b = "aba";

let k = 7;

console.log(appendAndDelete(a, b, k));
