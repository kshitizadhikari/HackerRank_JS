"use strict";

function equalizeArray(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let num = arr[0];
    let lp = 0;
    let max = 0;
    for (let i = 0; i < sortedArr.length; i++) {
        let current = sortedArr[i];
        let rp = i + 1;
        let currentMax = 1;
        while (rp < sortedArr.length) {
            if (sortedArr[rp] != current) {
                break;
            }
            currentMax++;
            rp++;
            i++;
        }

        if (currentMax > max) {
            max = currentMax;
            num = sortedArr[i];
        }
    }

    return sortedArr.length - max;
}

let arr = [1, 2, 2, 3, 3, 3, 3];

equalizeArray(arr);
