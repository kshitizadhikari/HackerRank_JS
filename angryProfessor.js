function angryProfessor(k, a) {
    let check = 0;
    let n = a.length;
    let i = 0;
    while (n > 0) {
        if (a[i] <= 0) {
            check++;
        }
        i++;
        n--;
    }
    return check >= k ? "YES" : "NO";
}

let a = [-1, -3, 4, 2];
let k = 3;

angryProfessor(3, a);
