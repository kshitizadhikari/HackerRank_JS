function reverseArray(a) {
    // Write your code here
    let len = a.length - 1;
    for(let i=0; i<Math.floor(a.length/2); i++) {
       let temp = a[i];
       a[i] = a[len-i];
       a[len-i] = temp;
       

    }
    
    return a;
    

}

let reverse = reverseArray([1,2,3, 4]);

for(const element of reverse) {
    console.log(element);
}