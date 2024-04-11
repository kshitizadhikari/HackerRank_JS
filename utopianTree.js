"use strict";
function utopianTree(n) {
    /*
    tree grows DOUBLE in height in spring cycle
    tree grows BY 1 in summer cycle

    */
    let height = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) height *= 2;
        else height += 1;
    }
    return height;
}

utopianTree(5);
