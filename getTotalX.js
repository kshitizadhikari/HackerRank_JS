function getTotalX(a, b) {
    /*
    1. Find all the factors of b say x;
    2. Check if x is factor of a;
    */
    let result = 0;
    let factors = [];
    for (let i = 1; i <= b[0]; i++) {
        let flag = 0;
        for (let j = 0; j < b.length; j++) {
            if (b[j] % i !== 0) {
                flag = 1;
            }
        }
        if (flag == 0) {
            factors.push(i);
        }
    }
    console.log(factors);
    for (let i = 0; i < factors.length; i++) {
        let flag = 0;
        for (let j = 0; j < a.length; j++) {
            if (factors[i] % a[j] !== 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            result++;
        }
    }
    console.log(result);
    return result;
}

let a = [2, 4];
let b = [16, 32, 96];
getTotalX(a, b);
