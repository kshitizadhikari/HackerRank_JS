"use strict";

function jumpingOnClouds(c, k) {
    let e = 100;
    let n = c.length;
    let index = 0;

    do {
        index = (index + k) % n;
        if (c[index] == 0) {
            e--;
        } else {
            e -= 3;
        }
    } while (index != 0);

    return e;
}

let c = [0, 0, 1, 0, 0, 1, 1, 0];
let k = 2;

jumpingOnClouds(c, k);
