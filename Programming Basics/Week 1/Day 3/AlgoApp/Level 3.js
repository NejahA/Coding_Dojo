



// var x =[1,3,5];
// x[0] = x[2];
// x[1] = x[0];
// console.log(x);
// answer: [5,5,5]

var x = [1,3,5];
var y = [0,5,7];
x[0] =x[1]+y[2]
y[1]=y[2]-x[0];
console.log(x).console


 var x = [1,3,5,8];
 x[0] = x[x.length-1];
 console.log(x);

 var x = [1,3,5,8];
 var temp = x[x.length-1];
 x[x.length-1] = x[0];
 console.log(x);

 var x = [1,3,5,8];
 var temp = x[x.length-1];
 x[x.length-1] = x[0];
x[0] = temp;
 console.log(x);



 var x = [1,3,5,8];
 x.pop();
 x.push(7);
 console.log(x);

var x = [1,3,5];
 x[0] = 15;
 x[3] = 77;
 console.log(x);


var x = [1,3,5,8,2,-5,-8];
 x[0] = x[x.length-1];
 x[x.length-1] = x[0];
 console.log(x);