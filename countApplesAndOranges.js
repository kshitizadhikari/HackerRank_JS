function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    
    for(let i=0; i<apples.length; i++) {
        let da=apples[i]+a;
        if(da >= s && da <= t ) {
            appleCount++;
        }
    }

    for(let i=0; i<oranges.length; i++) {
        let db=oranges[i]+b;
        if(db >= s && db <= t ) {
            orangeCount++;
        }
    }

    return [appleCount, orangeCount];

}



console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));