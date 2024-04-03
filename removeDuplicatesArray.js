function removeDuplicates(arr) {
    if(arr.length === 0) return 0;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] == arr[i+1]) {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
}

let myArr = [1, 2, 3, 3, 3, 3, 4, 5, 6, 6];
console.log(myArr);

let newArr = removeDuplicates(myArr);
console.log(newArr)