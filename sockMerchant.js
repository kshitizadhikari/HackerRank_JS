sockMerchant.js;

function sockMerchant(n, ar) {
    let pair = 0;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (!map.has(ar[i])) {
            map.set(ar[i], 1);
        } else {
            map.set(ar[i], map.get(ar[i]) + 1);
        }
    }

    map.forEach((value, key) => {
        pair = pair + Math.floor(value / 2);
    });
    return pair;
}

let ar = [1, 2, 1, 2, 1, 3, 2];

console.log(sockMerchant(ar.length, ar));
