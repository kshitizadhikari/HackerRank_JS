function kangaroo(x1, v1, x2, v2) {
    let d1 = x1 + v1;
    let d2 = x2 + v2;
    for (let i = 0; i < 100; i++) {
        if (d1 == d2) return "YES";

        d1 = d1 + v1;
        d2 = d2 + v2;
    }

    return "NO";
}

console.log(kangaroo(0, 2, 5, 3));
