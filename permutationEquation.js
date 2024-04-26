"use strict";

function getIndex(p, index) {
    let result = [];
    let num = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i] == index) {
            return i;
        }
    }
}

function permutationEquation(p) {
    //given: array : [4, 3, 1, 2]; // i[0] = 4 , i[1] = 3, i[2] = 1, i[3] = 2
    // return [2, 1, 4, 3]
    let output = [];
    for (let i = 0; i < p.length; i++) {
        let num = getIndex(p, i + 1);
        output.push(num + 1);
    }

    // let secondOutput = [];
    // for(let j = 0; j< output.length; j++) {
    //     let na = getIndex(output, j);
    //     secondOutput.push(na+1);
    // }
    // console.log(secondOutput);
    return output;
}

console.log(permutationEquation([2, 3, 1]));
