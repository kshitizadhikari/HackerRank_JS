climbingLeaderboard.js;

("use strict");

function climbingLeaderboard(ranked, player) {
    let set = new Set();
    let playerRank = [];
    for (let i = 0; i < ranked.length; i++) {
        if (!set.has(ranked[i])) set.add(ranked[i]);
    }

    let newRanks = Array.from(set);
    for (let i = 0; i < player.length; i++) {
        for (let j = 0; j < newRanks.length; j++) {
            if (player[i] == newRanks[j]) {
                if (j == 0) {
                    playerRank[i] = 1;
                } else {
                    playerRank[i] = j + 1;
                }
                break;
            } else if (player[i] > newRanks[j]) {
                let updatedRank = [];
                if (j == 0) {
                    updatedRank.push(player[i]);
                    updatedRank = updatedRank.concat(newRanks.slice());
                    newRanks = updatedRank.slice();
                    playerRank[i] = 1;
                } else {
                    playerRank[i] = j + 1;
                    updatedRank = newRanks.slice(0, j);
                    updatedRank.push(player[i]);
                    updatedRank = updatedRank.concat(
                        newRanks.slice(j, newRanks.length)
                    );
                    newRanks = updatedRank.slice();
                    newRanks = [...new Set(newRanks)];
                }
                break;
            }
            if (j == newRanks.length - 1 && player[i] < newRanks[j]) {
                newRanks.push(player[i]);
            }
        }
    }
    return playerRank;
}
let ranked = [100, 100, 50, 40, 40, 20, 10];
let player = [5, 25, 50, 120];

//new rank = 100, 90, 80

climbingLeaderboard(ranked, player);
