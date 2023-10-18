var year = 0;
var age = 0;

for ( year = 1996; year<=2023;year++){
    age = year-1996;
    if (year == 2023) {
        console.log("HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈")
    }
    else if (age % 10==0 && age!=0){
        console.log("happy decade of JS!");
    }
    else  {
        console.log(year," JS is awsome");
    }
        
}


