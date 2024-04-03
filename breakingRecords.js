function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let maxCount = 0;
    let minCount = 0;
    for(let i=1; i<scores.length; i++) {
        if(scores[i] > max) {
            maxCount++;
            max = scores[i];
        } else if(scores[i] < min) {
            minCount++;
            min = scores[i];
        }
    }

    console.log(maxCount + ' ' + minCount);

}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

breakingRecords(scores);