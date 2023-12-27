const matrix1 = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]



function diagonalDifference (matrix) {
    diagplus=0
    diagminus=0
    for (i=0; i<matrix.length;i++){
        diagplus += matrix[i][i] 
        console.log(diagplus);
        diagminus += matrix[i][matrix.length-1-i] 
        console.log(diagminus);
    }
    return diff = Math.abs(diagplus - diagminus)
}

function diagonalDifference1 (matrix) {
    diff=0
    for (i=0; i<matrix.length;i++){
        diff+=Math.abs(matrix[i][i]-matrix[i][matrix.length-1-i])
    }
    return diff
}

console.log("Diagonal difference :",diagonalDifference2(matrix1));