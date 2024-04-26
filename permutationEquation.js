"use strict";

function getIndex(p, index) {
    let result = [];
    for (let i = 0; i < p.length; i++) {
        if (p[i] == index) {
            return i + 1;
        }
    }
}

function permutationEquation(p) {
    let output = [];
    let finalOutput = [];
    for (let i = 0; i < p.length; i++) {
        output.push(getIndex(p, i + 1));
    }
    for (let i = 0; i < p.length; i++) {
        finalOutput.push(getIndex(p, output[i]));
    }
    return finalOutput;
}

console.log(permutationEquation([2, 3, 1]));
