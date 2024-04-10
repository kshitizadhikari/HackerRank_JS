repeatedString.js;

("use strict");

function repeatedString(s, n) {
    /* 
        string s = 'abc'
        n = 10
        new string snew = 'abcabcabca'
    */
    let count = 0;
    let entireWordRepeat = Math.floor(n / s.length);
    let remainingSpace = n - entireWordRepeat * s.length;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") count++;
    }

    count = count * entireWordRepeat;

    for (let i = 0; i < remainingSpace; i++) {
        if (s[i] === "a") count++;
    }
    return count;
}

repeatedString("aba", 10);
