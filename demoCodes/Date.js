const cd = new Date();

console.log(cd);
console.log(cd.getTime());
//epoch timestamp 1 jan 1970

setInterval(greet,1000)

function greet(){
    console.log(new Date());
}

setTimeout(function (n){console.log("HelloWorld")}, 2000);