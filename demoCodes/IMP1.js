function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSquares(a,b){
    let square1 = square(a);
    let square2 = square(b);
    return square1+square2;
}
function sumOfCubes(a,b){
    let square1 = cube(a);
    let square2 = cube(b);
    return square1+square2;
}

let ans = sumOfCubes(1,2)
console.log(ans);

