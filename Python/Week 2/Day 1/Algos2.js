nums1 =[1];
expected1=1;

nums2 =[5,4,5]
expected1=4

nums3 =[5,4,3,1,3,4,5]
expected1=4


function myfunct(arr) {
    numFreq={}

    for (el of arr ){              // for arrays:  "of" returns element , "in" returns index
        if (numFreq[el]>=1){
            numFreq[el]++
        }
        else {
            numFreq[el]=1
        }

    }
    for (key in numFreq){
        if(numFreq[key]%2==1 ){
            return key
        }
    }

    
}

console.log(myfunct(nums2))

