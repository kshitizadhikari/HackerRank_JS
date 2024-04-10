function birthday(s, d, m) {
    /*
    chocolate length = n;
    length of segment = ron's birth month say x
    sum of int on segment = x^2
    */

    let lp = 0;
    let rp = m - 1;
    let count = 0;
    while (rp < s.length) {
        let sum = 0;
        for (let i = lp; i <= rp; i++) {
            sum += s[i];
        }
        if (sum == d) {
            count++;
        }

        lp++;
        rp++;
    }
    console.log(count);
    return count;
}

birthday([1, 2, 1, 3, 2], 3, 2);
