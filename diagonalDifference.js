'use strict';

function diagonalDifference(arr) {

    let ltor = 0;
    let rtol = 0;
    let len = arr.length-1;
    for(let i=0; i<arr.length; i++) {
        ltor += arr[i][i];
        rtol += arr[i][len];
        len--;
    }
    console.log(ltor);
    console.log(rtol);
    return(Math.abs(ltor - rtol));
}           

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];

console.log(diagonalDifference(arr));