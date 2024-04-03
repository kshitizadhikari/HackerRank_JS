function reverseString(str) {
    
    let len = str.length-1;
    let rev='';
    for(let i=len; i>=0; i--) {
        rev+=str[i];
    }

    return rev;
}



let myStr = "This is it";
console.log(reverseString(myStr));