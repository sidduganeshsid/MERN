const dog = {
    name:"doggie",
    legs: 4,
    speaks: "bow bow"
}

const cat = {
    name: "cat",
    legs: 4,
    speaks: "meow meow"
}

//redundant code
console.log("Animal "+dog["name"]+" has "+dog["legs"]+" legs and speaks "+dog["speaks"]);
console.log("Animal "+cat["name"]+" has "+cat["legs"]+" legs and speaks "+cat["speaks"]);

function printStr(animal){
    console.log("Animal "+animal["name"]+" has "+animal["legs"]+" legs and speaks "+animal["speaks"]);

}

printStr(dog);