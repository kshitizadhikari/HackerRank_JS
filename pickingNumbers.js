function pickingNumbers(a) {
    // array = [1, 1, 2, 2, 4, 4, 5, 5, 5]
    // find the longest subarray whose element's difference <=1
    let max = 0;
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (Math.abs(a[i] - a[j]) <= 0) {
                count++;
                break;
            }
        }

        if (count > max) max = count;
    }
    return max;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
