"use strict";

function circularArrayRotation(a, k, queries) {
    let result = [];
    for (let i = 0; i < k; i++) {
        let poped = a.pop();
        a.unshift(poped);
    }

    for (let i = 0; i < queries.length; i++) {
        result.push(a[queries[i]]);
    }
    return result;
}

let a = [3, 4, 5];
let k = 2;
let queries = [1, 2];
circularArrayRotation(a, k, queries);
