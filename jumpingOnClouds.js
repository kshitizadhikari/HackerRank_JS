("use strict");

function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    while (i < c.length - 1) {
        if (c[i + 2] == 0) {
            i += 2;
            jumps++;
        } else {
            i++;
            jumps++;
        }
    }
    return jumps;
}

let c = [0, 1, 0, 0, 0, 1, 0];

jumpingOnClouds(c);
