migratoryBirds.js;

("use strict");

function migratoryBirds(arr) {
    let hashMap = {};
    let maxArrItem = arr[0];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in hashMap) {
            hashMap[arr[i]]++;
            if (hashMap[arr[i]] > max) {
                max = hashMap[arr[i]];
                maxArrItem = arr[i];
            } else if (hashMap[arr[i]] === max) {
                if (arr[i] < maxArrItem) {
                    maxArrItem = arr[i];
                }
            }
        } else {
            hashMap[arr[i]] = 1;
        }
    }

    return maxArrItem;
}
let arr = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(arr));

let str =
    "5 2 2 2 4 1 1 2 4 2 2 2 4 1 2 4 1 2 4 4 3 2 3 1 3 3 4 3 5 2 5 3 4 1 3 2 3 3 3 5 2 4 1 5 4 5 4 4 4 5 3 2 1 1 3 1 1 5 5 3 5 2 2 4 5 2 4 3 2 4 4 5 3 2 3 2 4 5 2 2 3 5 2 3 1 3 3 2 4 3 5 4 3 1 3 3 2 4 4 3 5 3 3 3 5 1 3 5 5 2 5 2 3 4 3 3 2 1 3 1 2 3 2 4 2 3 3 3 3 4 3 3 1 1 5 1 3 4 5 5 3 3 1 5 5 5 5 2 3 1 3 2 3 5 5 1 1 3 4 1 1 2 4 4 4 1 2 3 3 2 1 5 3 1 1 2 2 1 5 2 1 1 4 2 4 5 2 2 2 1 1 1 3 2 4 5 1 4 4 1 5 2 1 4 3 5 4 2 1 5 5 5 2 1 4 5 2 2 1 2 4 3 2 4 3 3 5 3 5 1 4 1 2 4 2 1 5 5 1 1 5 5 1 3 5 2 5 4 1 1 2 1 5 2 3 3 1 1 2 2 5 2 1 3 5 5 4 2 5 5 4 2 1 3 3 1 2 5 5 1 4 4 5 4 3 2 4 5 1 4 1 2 2 4 5 3 3 5 1 4 2 5 1 5 3 3 2 4 3 5 1 2 4 2 3 4 4 4 4 3 4 5 1 2 3 1 5 2 2 3 5 4 5 3 2 3 3 3 1 4 2 3 3 4 4 3 2 2 2 2 1 4 2 3 1 4 4 5 4 1 3 1 2 3 4 3 2 2 3 2 3 5 2 3 3 1 1 3 4 1 2 3 3 4 5 3 2 4 2 2 3 1 3 1 3 1 2 1 1 4 3 3 1 3 4 1 4 4 5 5 2 5 4 2 5 4 1 3 1 2 2 5 4 4 2 2 5 4 2 3 5 5 1 3 1 2 1 2 1 2 5 4 5 4 3 5 1 4 5 1 5 5 2 3 2 3 5 1 1 4 4 5 5 5 4 5 2 4 2 3 3 2 4 2 5 2 3 3 2 4 3 5 3 4 5 5 2 1 4 5 2 1 2 5 1 1 3 3 5 5 4 2 4 3 1 3 1 4 3";

let myARr = str.split(" ");

console.log(migratoryBirds(myARr));
