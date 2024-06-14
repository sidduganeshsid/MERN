console.log("HelloWorld")

var a = 1;
console.log(a);

const b = 2;
// b=3;//const 
console.log(b);
// let, const are used now days. 
// let means variables can be reassigned later.
// const means variables can't be reassigned.
// C:\Users\siddu\OneDrive\Desktop\MERN\demoCodes\hello.js:7
// b=3;
//  ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\Users\siddu\OneDrive\Desktop\MERN\demoCodes\hello.js:7:2)
//     at Module._compile (node:internal/modules/cjs/loader:1358:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
//     at Module.load (node:internal/modules/cjs/loader:1208:32)
//     at Module._load (node:internal/modules/cjs/loader:1024:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.14.0

let c = 10;
c = 20;
console.log(c);