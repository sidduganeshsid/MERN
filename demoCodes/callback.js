function sum(a, b, func){
    result = a+b;
    func(result);
}

function displayResult(data){
    console.log("Result of the sum is "+data);
}

function displayResultPassive(data){
    console.log("Sum of Result is "+data);
}

const ans = sum(1,2,displayResult);