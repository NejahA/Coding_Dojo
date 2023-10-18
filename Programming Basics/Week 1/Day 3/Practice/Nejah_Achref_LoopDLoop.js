
var distanceRan = 9;
var candyCount = 0;
var speed = 2;
for (var i=2; i<=6 ; i=i+2) {
    if (distanceRan>=i && speed > 5.5) {
        candyCount ++
    }
}
console.log ("distance : ", distanceRan,"/speed : ",speed,"mph candy count :",candyCount)



// How do we know we need a loop here?
// A: We have the repeated task of adding candies each two miles
// What's the starting point of the loop?
// A: the start is of the loop is 2 since its the first "candy cap"
// When should the loop stop?
// A: the loop stops at the maximum ammount of candies "6"
// How will the loop know when to stop?
// when the counter of the loop exceeds 6
// What's incrementing for each iteration of the loop?
// A: the counter is incrementing
// What variables do we need?
// A: the distance , the speed , the ammount of candies and the counter "i"
