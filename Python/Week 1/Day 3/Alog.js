function join (arr,separator){
    str=''
    for (i=0; i<arr.length ; i++){
        if (i==arr.length-1){
            str = str+ arr[i]
        }
        else {
            str = str + arr [i] + separator
        }
    }
    return str
    
}

function join2 (arr, spearator){
    str = ""
    if(arr.length >= 1){

        str=arr[arr.length-1]
        for (i=arr.length-2;i>=0;i--){
                str =arr[i]+ spearator+ str
        }
    }
    return str
}



arr1 = [12, 58]

separ1= ", "

console.log(join2(arr1,separ1))
