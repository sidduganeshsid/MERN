// console.log("All concepts");

// const { futimes } = require("fs");

// //sync function //regular function
// function sum(a, b){
//     return a+b;
// }
// //variable function
// let sumOfab = (a, b) => {
//     return a+b;
// }

// console.log( sum(1, 2) );


// //Async function
// //means js -> (goes and asks OS for file.)
// readFile("a.txt", onDone ) //async call //2nd param is anonymous function

// function onDone(content){
//     console.log(content);
// }

// setInterval(new Date(),1000)

function demoAsyncFunction(callback){
    //do some async logic here
    callback("Hi from callback");
}
async function main(){
    demoAsyncFunction(function(value) {
        console.log(value);
    });
}
main();

function demoAsyncFunction1(){
    let p = new Promise(function (resolve) {
        //do some async logic here
        resolve("hi there")
    })
    return p;
}
function mainPromise() {
    demoAsyncFunction1().then(function (value) {
        console.log(value);
    })
}
mainPromise();

function demoAsyncFunctionAsync(){
    let p = new Promise(function (resolve) {
        //do some asynce logic here
        resolve("Hi from Async and await");
    })
    return p;
}
async function mainAsyncAwait(){
    const value = await demoAsyncFunctionAsync();
    console.log(value);
}
mainAsyncAwait();