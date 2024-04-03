function getTotalX(a, b) {
    let x = a.concat(b);
    let count = 0;

    for(let i=0; i<a.length; i++) {
        for(let j=0; j<x.length; j++) {
            if(x[j]%a[i] != 0) {
                break;
            }

            if(j==x.length-1){
                count++;
            }
        }
    }

    

}


let a = [2, 6];
let b = [24, 36];
console.log(getTotalX(a, b));