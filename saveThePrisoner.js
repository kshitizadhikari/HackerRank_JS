function saveThePrisoner(n, m, s) {
    var result = (s + m - 1) % n;

    if (result == 0) result = n;

    return result;
}
saveThePrisoner(5, 15, 1);
