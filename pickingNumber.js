function main()
{
    let nums = [98, 3, 99, 1, 97, 2];
    let max = pickingNumbers(nums);

    console.log(max);
}

function pickingNumbers(a) {
    // Write your code here
        
        let result = 0;
        for(let i=0; i<a.length; i++) {
            for(let j=i+1; j<a.length; j++) {
                if(Math.abs(a[i] - a[j]) <= 1) {
                    console.log(a[i] + " - " + a[j]);
                    result++;
                    console.log(result);
                    break;
                }
            }
        }
        return result;

}

main();