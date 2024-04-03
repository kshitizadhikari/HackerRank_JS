'use strict';

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let len = arr.length;

    for(let i=0; i<arr.length; i++) {
        if(arr[i]>0) {
            positive++;
        } else if(arr[i]<0) {
            negative++;
        } else {
            zero++;
        }
    }

   console.log((positive/len).toFixed(6));
   console.log((negative/len).toFixed(6));
   console.log((zero/len).toFixed(6));
}

let arr = [1, 1, 0, -1, -1];

plusMinus(arr);