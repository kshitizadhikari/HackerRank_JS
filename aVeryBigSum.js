'use strict';

function aVeryBigSum(ar) {
    result = 0n;
    for(let i=0; i<ar.length; i++) {

        result +=  BigInt(ar[i]);
    }
    return result
}

let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(ar));