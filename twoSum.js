// function twoSum(arr, target) {

//     let set = new Set();

//     for(let i=0; i<arr.length-1; i++) {
//         let check = target - arr[i];
//         if(set.has(check)) {
//             return [arr[i], check];
//         } else {
//             set.add(arr[i]);
//         }
//     }

//     return 'No two numbers that get target value';

// }


function twoSum(arr, target) {

    let hashMap = new Map();
    
    for(let i=0; i<arr.length; i++) {
        let check = target - arr[i];

        if(hashMap.has(check)) {
            return [hashMap.get(check), i];
        } else {
            hashMap.set(arr[i], i);
        }
    }
    return 'No two numbser that get the target value';


}


let myArr = [1, 2, 3, 5, 7, 9];
console.log(twoSum(myArr, 9));