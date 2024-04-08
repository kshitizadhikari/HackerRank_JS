countingValleys.js;

("use strict");

function countingValleys(steps, path) {
    let currentLevel = 0;
    let valleyCount = 0;
    let levelCheck = "";
    for (let i = 0; i < steps; i++) {
        if (path[i] == "U") {
            currentLevel++;
        } else {
            currentLevel--;
        }

        if (currentLevel == 0) {
            levelCheck = "";
        } else if (currentLevel < 0) {
            if (levelCheck == "") {
                levelCheck = "D";
                valleyCount++;
            }
        }
    }

    return valleyCount;
}

let str = "DDUUUUDD";

console.log(countingValleys(str.length, str));
