catAndMouse.js;

("use strict");

function catAndMouse(x, y, z) {
    /*
        Given: 
        cat A = x; 
        cat B = y;
        mouse = z;

        find catA movement = x - z
        find catB movement = x - z
    */
    let catA = Math.abs(x - z);
    let catB = Math.abs(y - z);

    return catA < catB ? "Cat A" : catB < catA ? "Cat B" : "Mouse C";
}

console.log(catAndMouse(1, 2, 3));
