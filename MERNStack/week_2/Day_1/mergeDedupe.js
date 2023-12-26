arr1= [1,3,3,5,8,10]
arr2= [1,3,3,5,5,8,10,10,10]
arr3= [1,3,4,5,8,10]
arr4= [1,3,4,5]
// 1,3,3,5,8,10
// 1,3,5
arr5=[5,10,100,999]
arr6=[1,2,2]

console.log(mergeDedupeSorted(arr2,arr5));



function cross (arr1,arr2) {
    newarr=[]
    for (i=0; i<arr1.length; i++){
        for (j=0;j<arr2.length;j++){
            if (arr1[i]==arr2[j])
            {
                dupe=false
                for (k=0; k<newarr.length;k++)
                {
                    if (arr2[j]== newarr[k])
                    {
                        dupe=true
                    }
                
                }
                if (dupe == false){
                    newarr.push(arr2[j])
                }
            }
        }
    }
    return newarr

}

function mergeDedupe (arr1,arr2) {
    newarr=[]
    for (i=0; i<arr1.length; i++){
        dupe=false
                for (k=0; k<newarr.length;k++)
                {
                    if (arr1[i]== newarr[k])
                    {
                        dupe=true
                    }
                }
                if (dupe == false){
                    newarr.push(arr1[i])
                }
            }
        for (j=0;j<arr2.length;j++){
            dupe=false
                for (k=0; k<newarr.length;k++)
                {
                    dupe=false
                    if (arr2[j]== newarr[k])
                    {
                        dupe=true
                    }
                }
                if (dupe == false){
                    newarr.push(arr2[j])
                }
        }
    
    return newarr
}

function mergeDedupeSorted (arr1,arr2){
    merged=[]
    if (arr1.length<arr2.length){
         small=arr1
         big = arr2
    }
    else  {small= arr2
           big = arr1}
    for (i=0 ; i< small.length; i++){
        if (small[i]==big[i]){
            if (merged[merged.length-1]!=small[i]){
                merged.push(small[i])
            }
        }
        
        
            
            else if (small[i]!=merged[merged.length-1]){
                merged.push(small[i])
            }
            else if (big[i]!= merged[merged.length-1]){
                merged.push(big[i])
            }
        }
    for (var k=small.length;k<big.length;k++){
        console.log(k);
        if (big[k]!=merged[merged.length-1]){
            merged.push(big[k])
            
        }
    }
    return merged
}