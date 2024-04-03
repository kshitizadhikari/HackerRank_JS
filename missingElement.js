function missingElement(arr) {
    let len = arr.length - 1;
    let missing = [];
   for(let i=1; i<=len; i++) {
    let check = 0;
    check = arr[i-1] + 1;
    if(arr[i] !== check) {
        missing.push(check);
    }
   }
   return missing;
}

let myArr = [1, 2, 3, 5, 6, 8];
console.log(missingElement(myArr));