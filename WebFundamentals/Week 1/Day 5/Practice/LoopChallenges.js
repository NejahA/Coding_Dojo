console.log("Odds from 1 to 20 :")
for(i=1;i<=20;i++){
    if(i%2==1){
        console.log(i)
    }
}
console.log("Decreasing Multiples of 3 :")
for(i=100;i>=0;i--){
    if(i%3==0){
        console.log(i)
    }
}
console.log("Sequence :")
for(i=4;i>=-4;i=i-1.5){
    console.log(i)
}


var sum=0;
for(i=0;i<=100;i++){
    sum= sum+i
}
console.log("Sigma : "+sum)


var product=1
for(i=1;i<=12;i++){
    product=product*i
}
console.log("Factorial : ",product)