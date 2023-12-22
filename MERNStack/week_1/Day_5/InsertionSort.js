const arr1=[2,3,9,5,1,6]

function insertionSort(arr) {
    for (i=1; i<arr.length;i++){
        temp = arr[i]
        // for(j=i-1;j>=0;j--){
        //     if (arr[j]>temp){
        //         arr[j+1]=arr[j]
        //     }
        //     if (arr[j]<=temp){
        //         arr[]
        //     }    
        // }
        j = i-1
        while (j>=0 && arr[i]< arr[j] ) {
            arr[j+1]= arr[j]
            j--
        }
        arr[j+1] = arr[i]

    }
    return arr

}

console.log(insertionSort(arr1));