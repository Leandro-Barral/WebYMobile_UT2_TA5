function leapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

leapYear(0)
leapYear(4)
leapYear(32)
leapYear(2000)
leapYear(1900)
leapYear(26)
leapYear(100)