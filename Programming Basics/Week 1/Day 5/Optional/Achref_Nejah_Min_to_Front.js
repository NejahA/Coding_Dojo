function minToFront(arr){
    var min=arr[0];
    for (var i=0;i<arr.length;i++){
        if (arr[i]<=min) {
            if (i>0) {
                min = arr[i]
                minIdx = i
            }
        }
    }
    for (var j=minIdx; j>0; j--)[
        arr[j]=arr[j-1]
    ]
    arr [0]= min;
    return arr
}
console.log(minToFront([4,2,1,3,5,0]))
