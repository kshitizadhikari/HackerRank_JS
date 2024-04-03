'use strict';

function staircase(n) {
    for(let i=0; i<n; i++) {
        for(let k=i; k<n-1;k++) {
            process.stdout.write(" ");
        }
        for(let j=0; j<=i; j++) {
            process.stdout.write("#");
        }
        
        console.log();
    }
}

staircase(5);