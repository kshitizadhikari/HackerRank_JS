'use strict';

function minMaxSum(arr) {
    arr.sort();

    let minSum = 0;
    let maxSum = 0;
    let tempSum = 0;
    for(let i=1; i<arr.length-1; i++) {
        tempSum+=arr[i];
    }

    minSum = tempSum + arr[0];
    maxSum = tempSum + arr[arr.length-1];
    
    console.log(minSum + ' ' + maxSum);
}

let arr = [1, 3, 5, 7, 9];
minMaxSum(arr);
