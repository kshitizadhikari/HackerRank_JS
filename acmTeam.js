"use strict";

function acmTeam(topic) {
    let col = topic[0].length;
    let row = topic.length;
    let maxCount = 0;
    let teamCount = 0;
    for (let i = 0; i < row; i++) {
        for (let j = i + 1; j < row; j++) {
            let count = 0;
            for (let k = 0; k < col; k++) {
                if (topic[i][k] == 1) {
                    count++;
                    // console.log(count);
                } else if (topic[j][k] == 1) {
                    count++;
                }
            }
            if (count > maxCount) {
                teamCount = 1;
                maxCount = count;
            } else if (count == maxCount) teamCount++;
        }
    }

    return [maxCount, teamCount];
}

let topic = ["10101", "11110", "00010"];

let topic2 = ["10101", "11100", "11010", "00101"];

let topic3 = ["11101", "10101", "11001", "10111", "10000", "01110"];

acmTeam(topic3);
