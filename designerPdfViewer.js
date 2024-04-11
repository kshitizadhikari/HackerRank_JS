"use strict";
//97 to 122
function designerPdfViewer(h, word) {
    let arr = [...h];
    let num = word[0].charCodeAt(0) - 97;
    let max = h[num];
    for (let i = 0; i < word.length; i++) {
        let current = h[word[i].charCodeAt(0) - 97];
        if (current > max) {
            max = current;
        }
    }

    return max * word.length;
}

let str = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7";
let arr = str.split(" ");

designerPdfViewer(arr, "zaba");
// let x = 112;
// let a = String.fromCharCode(x);
// console.log(a);

// let z = "p";
// let num = z.charCodeAt(0);
// console.log(num);
