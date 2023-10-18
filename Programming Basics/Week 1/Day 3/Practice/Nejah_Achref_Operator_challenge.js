function howMuchLeftOverCake(numberOfPieces,numberOfPeople ) {
    var leftOver = numberOfPieces-numberOfPeople ;
    if (leftOver<=0){
        console.log("No leftovers for you!");
    }
    else if (leftOver<=2) {
        console.log ("You have some leftovers");
    }
    else if (leftOver<=5) {
        console.log ("You have leftovers to share");
    }
    else if (leftOver>5) {
        console.log ("Hold another party!");
    }
}

howMuchLeftOverCake(12,10);