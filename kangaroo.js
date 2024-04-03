function kangaroo(x1, v1, x2, v2) {
    
        let d1=x1 + v1;
        let d2=x2 + v2;
        let flag=0;
        for(let i=0; i<=20;i++) {
            d1 = d1+v1;
            d2 = d2+v2;
            console.log(d1);
            console.log(d2);
            console.log();
            if(d1 == d2) {
                flag=1;
            } 
        }
        

        if(flag == 1) {
        return 'YES';
        } else {
        return 'NO';
        }

    if(x2>x1 && v2>v1) {
        return 'NO';
    } else return 'YES';
}

console.log(kangaroo(0, 3, 4, 2));