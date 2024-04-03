function rotateLeft(d, arr) {
    for(let i=0; i<d; i++) {
        let temp = arr[0];
        arr.shift();
        arr.push(temp);
    }
    return arr;
}

let myArr = [1, 2, 3, 4, 5];

console.log(rotateLeft(2, myArr));
