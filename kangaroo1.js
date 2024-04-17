"use strict";

function kangaroo(x1, v1, x2, v2) {
    if (v1 <= v2) return "NO";

    const jumps = (x2 - x1) / (v1 - v2);

    if (jumps >= 0 && Number.isInteger(jumps)) return "YES";
    else return "NO";
}

console.log(kangaroo(0, 2, 5, 3));
