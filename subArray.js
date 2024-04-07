function printSubarrays(arr, target) {
    const n = arr.length;

    // Generate all subarrays
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // Print the subarray from index i to j
            let subArr = arr.slice(i, j + 1);
            let sum=0;
            for(let k=0; k<subArr; k++) {
                sum+=subArr[k];
                if(sum==target){
                    return subArr;
                }
            }

        }
    }
}

// Example usage
const array = [1, 2, 3, 4, 5];
console.log(printSubarrays(array, 7));
