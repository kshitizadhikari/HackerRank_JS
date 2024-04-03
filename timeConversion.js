function timeConversion(s) {
    let len = s.length - 1;
    let hour = parseInt(s.slice(0,2));
    let newTime = s.slice(2, len-1).split("");
    if(s[len-1] == 'A') {
        //for AM

        if(hour == 12) {
            newTime.unshift(0);
            newTime.unshift(0);
        } else if(hour < 10) {
            newTime.unshift(hour);
            newTime.unshift(0);
        } else {
            newTime.unshift(hour);
        }

    } else {
        //for PM
        if(hour==12) {
            newTime.unshift(12);
        } else {
            hour+=12;
            newTime.unshift(hour);
        }

    }

    return newTime.join("");

}

let s = '12:45:54PM'

console.log(timeConversion(s));