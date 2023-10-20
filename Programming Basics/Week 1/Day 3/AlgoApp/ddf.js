function countPositives(){
	var array = [4, 9, -23, 14, -6, 20, 33, -8, 1, -52];
	var count = 0;
	for (i=0;i<array.length;i++){
	    if (array[i]>0){
	        count++
	    }
	}
	return count; 
}
function smallestValue(){
	var array = [-13, -15, -8, -29, -3, 4, 9, 10, -3, 7];
	var smallest = array[0];
	for (i=0;i<array.length;i++){
	    if(array[i]<smallest){
	        smallest=array[i]
	    }
	}
	return smallest; 
}

function sum_even(){
    var sum = 0;
    for (i=2;i<=6;i++){
        if (i%2==0){
            sum+=i
        }
    }
 
    return sum; 
 }


 console.log(sum_even())