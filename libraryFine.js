"use strict";

function libraryFine(d1, m1, y1, d2, m2, y2) {
    //d1 = actual returned //d2 = due date
    if (
        y1 < y2 ||
        (y1 == y2 && m1 < m2) ||
        (y1 == y2 && m1 == m2 && d1 <= d2)
    ) {
        //no fine
        return 0;
    } else if (y1 == y2 && m1 == m2) {
        //same month
        return (d1 - d2) * 15;
    } else if (y1 == y2) {
        //same year
        return (m1 - m2) * 500;
    } else {
        return 10000;
    }
}

console.log(libraryFine(12, 1, 2015, 1, 1, 2015));
