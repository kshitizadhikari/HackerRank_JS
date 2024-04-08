"use strict";

function pageCount(n, p) {
    let frontTurn = 1;
    let backTurn = 1;
    if (p == 1 || p == n) return 0;

    for (let i = 2; i <= Math.floor(n / 2); i += 2) {
        if (p == i || p == i + 1) break;
        frontTurn++;
    }

    if (n % 2 == 0) {
        for (let i = n - 1; i >= Math.floor(n / 2); i -= 2) {
            if (p == i || p == i - 1) break;
            backTurn++;
        }
    } else {
        if (p == n - 1) return 0;
        for (let i = n - 2; i >= Math.floor(n / 2); i -= 2) {
            if (p == i - 1 || p == i) break;
            backTurn++;
        }
    }

    return Math.min(frontTurn, backTurn);
}
console.log(pageCount(5, 4));
