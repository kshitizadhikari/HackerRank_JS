"use strict";

function viralAdvertising(n) {
    let dayCount = 5;
    let totalLikeCount = 0;
    let like = 0;
    for (let i = 1; i <= n; i++) {
        like = Math.floor(dayCount / 2);
        totalLikeCount += like;
        dayCount = like * 3;
    }

    return totalLikeCount;
}

console.log(viralAdvertising(3));
