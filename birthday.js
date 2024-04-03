function birthday(s, d, m) {
    let hashSet = new Set();
    let count = 0;
    for(let i=0; i<s.length; i++) {
        let x = s[i];
        let target = d - x;

        if(hashSet.has(target)) {
            count++;
        } else {
            hashSet.add(s[i]);
        }
    }
    return count;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));