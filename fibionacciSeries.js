function fibionacciSeries(n) {

    let fib = [];
    fib.push(0);
    fib.push(1);

    if(n==0) {
        return;
    }else if(n == 1) {
        return fib;
    } else {
        for(let i=2; i<n; i++) {
            fib[i] = fib[i-2] + fib[i-1];
        } 
        return fib;
    }

}


console.log(fibionacciSeries(7));