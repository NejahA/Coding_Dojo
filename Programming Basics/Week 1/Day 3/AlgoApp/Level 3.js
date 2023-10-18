var x =[1,3,5];
x[0] = x[2];
x[1] = x[0];
console.log(x);
answer: [5,5,5]

var x = [1,3,5];
var y = [0,5,7];
x[0] =x[1]+y[2]