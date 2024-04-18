"use strict";

function dayOfProgrammer(year) {
    let d = 0;
    let m = 1;
    let calendarType = 0; // 0  = JC  1 = GC
    let toFindDay = 256;
    let f = 0;
    if (year >= 1919) {
        calendarType = 1;
    }

    if (year % 4 == 0) {
        if (calendarType == 0) {
            //leap year in JC
            for (let i = 0; i < 12; i++) {
                if (d >= toFindDay) {
                    m--;
                    if (f == 0) {
                        d = Math.abs(d - 31 - toFindDay + 1);
                    } else {
                        if (m == 2) {
                            d = d = Math.abs(d - 29 - toFindDay);
                        } else {
                            d = d = Math.abs(d - 30 - toFindDay);
                        }
                    }
                    break;
                }
                if (i % 2 == 0) {
                    d += 31;
                    f = 0;
                } else {
                    f = 1;
                    if (i == 1) {
                        d += 29;
                    } else {
                        d += 30;
                    }
                }
                m++;
            }
        } else if (calendarType == 1) {
            if (year % 100 != 0) {
                //leap year in GC
                for (let i = 0; i < 12; i++) {
                    if (d >= toFindDay) {
                        m--;
                        if (f == 0) {
                            d = Math.abs(d - 31 - toFindDay + 1);
                        } else {
                            if (m == 2) {
                                d = d = Math.abs(d - 29 - toFindDay);
                            } else {
                                d = d = Math.abs(d - 30 - toFindDay);
                            }
                        }
                        break;
                    }
                    if (i % 2 == 0) {
                        d += 31;
                        f = 0;
                    } else {
                        f = 1;
                        if (i == 1) {
                            d += 29;
                        } else {
                            d += 30;
                        }
                    }
                    m++;
                }
            }
        }
    } else {
        //not a leap year
        for (let i = 0; i < 12; i++) {
            if (d >= toFindDay) {
                m--;
                if (f == 0) {
                    d = Math.abs(d - 31 - toFindDay);
                } else {
                    if (m == 2) {
                        d = d = Math.abs(d - 28 - toFindDay);
                    } else {
                        d = d = Math.abs(d - 30 - toFindDay);
                    }
                }
                break;
            }
            if (i % 2 == 0) {
                d += 31;
                f = 0;
            } else {
                f = 1;
                if (i == 1) {
                    d += 29;
                } else {
                    d += 30;
                }
            }
            m++;
        }
    }
    return `${d}.0${m}.${year}`;
}

console.log(dayOfProgrammer(1800));
