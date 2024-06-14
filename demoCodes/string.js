const name = "sidduganesh";
console.log("length:"+name.length);
console.log(name.indexOf("ganesh"));
console.log(name.slice(5,11));

console.log("siddu".slice(0,3));
console.log("siddu".substring(56,0));//siddu
console.log("sidduganesh".substring(5,6));// 5 to 6-1 index values

const sentence = "hai my name is siddu ganesh";
const words = sentence.split(" ");//splits based on the delimiter.
console.log(words);