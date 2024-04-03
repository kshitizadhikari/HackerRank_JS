function gradingStudents(grades) {
    for(let i=0; i<grades.length; i++) {
        if(grades[i] < 38) {
            continue;
        }        

        let r = grades[i] % 10;
        let x = 0;
        if(r<5 && 5-r<3) {
            x = 5-r;
        } else if(r>5 && r<10 && 10-r<3) {
            x = 10-r;
        } 
        grades[i]+=x;
    }

    return grades;
}


let grades = [73, 67, 38, 33];

console.log(gradingStudents(grades));