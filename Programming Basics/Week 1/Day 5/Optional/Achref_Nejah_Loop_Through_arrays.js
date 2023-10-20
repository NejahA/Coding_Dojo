// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];


// challenge 1
for (i=0;i<=arr1.length;i++){
    console.log(arr1[i]);
}

// challenge 2
var sum=0;
for (i=0;i<arr2.length;i++){
    sum += arr2[i];
    console.log(arr2[i],sum);
    
}


// challenge 3
for (var i=0;i<arr3.length;i++){
    if (arr3[i]>5){
        console.log(arr3[i]);
    }
    else {
        arr3[i]="No dice."
        
    }
}