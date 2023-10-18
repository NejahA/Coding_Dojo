var x=[1,2,4];
console.log(x);
answer: [1,2,4];

var x=[1,3,5]
console.log(x[0]);
answer: 1;

var x=[2,4,6];
console.log(x[1]);
answer: 4;

var x=[1.3]
console.log(x[0]);
answer: 1.3

var x=[1,2,4]
x[0] = x[1];
answer :[2,2,4];

var x=[1,3,5];
var y=x.length;
console.log(y);
answer:3;

var x= [2,4,6,3,7];
var y=x.length -2;
console.log(x[y]);
answer:3;


var x=[2,4,6,3,7];
var y=x.length;
answer:7

var x=[1,3,5,7];
x[0] = x[x.length-2];
console.log(x);
answer : [5,3,5,7]

var x=[1,3,5,7];
x[x.length-3] = x[x.length/2+x.length/4];
console.log(x);
answer: [1,7,5,7];

var x=[1,3,5,7];
var y=[2,4,6];
x[2]=y[x.length-3];
console.log(x);
answer: [1,3,4,7]

var x=[1,3,5,7];
var y=[2,4,6];
x[2]= y[x.length-3]+x[x[0]+y[0]];
console.log(x);
answer: [1,3,11,7]
