// function palindrome(num) {
//     let str = num.toString();

//     let arr = str.split('');
//     const original = arr.slice().join('');
    
//     let rev = arr.reverse().join('');

//     console.log(original);
//     console.log(rev);

//     if(original === rev) {
//         return 'palindrome';
//     } else {
//         return 'not palindrome';
//     }
// } 


function palindrome(num) {
    let original = num;
    let reverse = 0;
    let rem;
    while(num>0) {
        rem = num % 10;
        reverse = (reverse * 10) + rem;
        num = Math.floor(num/10);
    }

    
    console.log(original);
    console.log(reverse);

    if(original == reverse) {
        return 'Palindrome';
    } else {
        return 'Not Palindrome';
    }

}

let num1 = 11011;
let num2 = 111101;

console.log(palindrome(num1));
console.log(palindrome(num2));