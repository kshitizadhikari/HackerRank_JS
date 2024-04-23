"use strict";

function extraLongFactorials(n) {
    var result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    let str = result.toString();
    return str;
}

extraLongFactorials(30);
