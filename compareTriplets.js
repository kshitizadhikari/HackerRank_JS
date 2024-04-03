function compareTriplets(a, b) {
    let result = Array(2).fill(0);
    for(let i=0; i<a.length; i++) {
        if(a[i] > b[i]) {
            result[0]++;
        } else if(a[i] < b[i]) {
            result[1]++;
        }
    }
    return result;
}

let a = [1, 2, 3];
let b = [3, 2, 1];

console.log(compareTriplets(a, b));