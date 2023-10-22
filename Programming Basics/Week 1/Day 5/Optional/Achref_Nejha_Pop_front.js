function popFront(arr){
    for (i=0;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr.pop()
    return arr
}
console.log(popFront([5, 93, 22, 4]))