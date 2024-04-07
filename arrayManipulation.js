function arrayManipulation(n, queries) {
    let arr = Array(n).fill(0);
    let max= arr[0];
    for(let i=0; i<queries.length; i++) {
        let a = queries[i][0];
        let b = queries[i][1];
        let k = queries[i][2];

        for(j=a-1; j<b; j++) {
            arr[j] += k;

            if(arr[j] > max) {
                max = arr[j];
            }
        }

    }
    return max;
}


let queries = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1]
];
let query2 = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
]

let result = arrayManipulation(5, query2);

console.log(result); 
