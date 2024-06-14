function calArithmetic(a, b, type){
    if(type == "sum"){
        return sum(a, b);
    }
    if(type == "sub"){
        return sub(a, b);
    }
}

function sum(a, b) {
    return a+b;
}
function sub(a, b) {
    return a-b;
}

const value = calArithmetic(1,2, "sub");
console.log(value);