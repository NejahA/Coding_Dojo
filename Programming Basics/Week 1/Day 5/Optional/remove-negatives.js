function removeNegatives(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] <= 0) {
            arr.splice(i,1);
        }
    }
    return arr;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);