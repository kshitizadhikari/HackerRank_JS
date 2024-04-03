function dynamicArray(n, queries) {
    let arr = [];
    for(let i=0; i<n; i++) {
        arr.push([]);
    }
    let lastAnswer = 0;
    let answers = [];
    //q1 :
    // let idx = ((x^lastAnswer)%n);
    // arr[idx] = arr[idx] + y;

    //q2 :
    // let idx = ((x^lastAnswer)%n);
    // lastAnswer = arr[idx][y%size(arr[idx])];


    for(let i=0; i<queries.length; i++) {
        if(queries[i][0] == 1) {
            let idx = ((queries[i][1]^lastAnswer)%n);
            arr[idx].push(queries[i][2]);
        } else {
            let idx = ((queries[i][1]^lastAnswer)%n);
            lastAnswer = arr[idx][queries[i][2]%(arr[idx]).length];
            answers.push(lastAnswer);
        }
    }
    return answers;
}

let queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
];

let result = dynamicArray(2, queries);
