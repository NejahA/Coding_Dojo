// console.log(hello);
// var hello = 'world';

// var hello
// console.log(hello) : undefined
// hello="world"

// correction :
// hello="world"
// console.log(hello) : undefined

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// var needle = "haystack"
// function test()
// test():
// needle= "magnet"
//  console.log(needle) : "magnet"

// correction:
// var needle = "haystack";
// function test() {
//     var needle = "magnet";
//     console.log(needle);
// }
// test();

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// var brendan = 'super cool'
// function print
// console.log(brendan) : "super cool"

// correction :


// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);







// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

//  var food = "chicken"
// function : eat()
// console.log(food) : "chicken"
// eat() :
// food = "half-chicken"
// console.log (food) : "half-chicken"
// food= "gone"

// Correction :

// var food = 'chicken';
// console.log(food);
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// eat();







// mean();
// console.log(food); :
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// var mean
// var food
// mean():
//     food = "chicken"
//     console.log(food): chicken
//     food = "fish"
//     console.log(food): fish

// console.log (food): undefined


// // Correction : 
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// mean();








// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// var genre
// function rewind

// console.log(genre): undefined
// genre = "disco"
// rewind():
//     genre = "rock"
//     console.log(genre):"rock"
//     var genre = "r&b"
//     console.log(genre): "r&b"

// console.log(genre): disco



// Correction : 
// var genre = "disco";
// console.log(genre);
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// rewind();
// console.log(genre);







// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// function learn()
// dojo = "san jose"
// console.log(dojo):  "san jose"
// learn()
//     dojo="seattle"
//     console.log(dojo): "seattle"
//     var dojo    ="burbank"
//     console.log(dojo):"burbank"

// console.log(dojo):"san jose"

// Correction : 
// dojo = "san jose";
// console.log(dojo);
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// learn();
// console.log(dojo);






// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// function
// console.log(makeDojo("Chicago", 65));
//     const dojo ={}
//     dojo.name="Cicago" : cant assign
//     dojo.students = 65 : cant assign
//     dojo.hiring = true : cant assign
//     // return dojo

// console.log(makeDojo("Berkeley", 0))
//     const dojo= {}
//     dojo.name = "Berkley"  : cant assign
//     dojo.students=0        : cant assign
//     dojo = "closed for now" : cant assign
//     return dojo


// // Correction :

// function makeDojo(name, students){
//      dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
