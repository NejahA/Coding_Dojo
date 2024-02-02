function factorial (num){
    if (num==undefined){
        num=4
    }
    if (num ==1 ){
        return 1
    }
    return num*factorial(num-1)
}

console.log(factorial())