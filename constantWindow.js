function constantWindow(w, arr, target) {
    let lp = 0;
    let rp = w-1;
    let sum = 0;
    // while(rp < arr.length-1) {
    //     for(let i=lp; i<=rp; i++) {
    //         sum+=arr[i];
    //     }
    //     if(sum == target) {
    //         return true;
    //     }
    //     console.log(sum);
    //     sum-=arr[lp];
    //     lp++;
    //     rp++;
    //     sum+=arr[rp];
    // }

    for(let i=lp; i<=rp; i++) {
        sum+=arr[i];
    }

    if(sum == target) {
        return true;
    }

    while(rp<arr.length-1) {
        sum-=arr[lp];
        lp++;
        rp++;
        sum+=arr[rp];

        if(sum == target) {
            console.log(arr.splice(lp, rp));
            return true;
        }
    }


}


let arr= [1, 2, 3, 4, 5, 7];
let target = 9;
console.log(constantWindow(3, arr, target));