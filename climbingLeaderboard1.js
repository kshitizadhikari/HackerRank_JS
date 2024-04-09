("use strict");

function climbingLeaderboard(ranked, player) {
    let playerRank = [];
    let uniqueRanked = [...new Set(ranked)];
    for (let i = 0; i < player.length; i++) {
        let rank = 1;

        for (let j = 0; j < uniqueRanked.length; j++) {
            if (player[i] >= uniqueRanked[j]) {
                playerRank.push(rank);
                break;
            }

            rank++;
        }

        if (playerRank.length !== i + 1) {
            playerRank.push(rank);
        }
        console.log(uniqueRanked);
        console.log(playerRank);
    }
    return playerRank;
}
let ranked = [100, 100, 50, 40, 40, 20, 10];
let player = [95, 25, 50, 120];
//new rank = 100, 90, 80

climbingLeaderboard(ranked, player);
