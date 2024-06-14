let person1 = "sid"
let age1 = 22

let person2 = "ram"
let age2 = 30

let person3 = "sam"
let age3 = 40

const personArray = ["sid","ram","sam"]

console.log(personArray[0]);

//prgm to print all even 

const ages = [21,22,23,24,25,26]

for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0)
        console.log(ages[i]);
}

//big age
let max=0;
for(let i=0;i<ages.length;i++){
    if(ages[i]>max)
        max = ages[i];
}

console.log(max);

const personArrayNames = ["sid","ram","sita","sam"]
const genderArray = ["male","male","female","male"]

for(let i=0;i<personArrayNames.length;i++){
    if(genderArray[i]=="male")
        console.log(personArrayNames[i]);
}

//object = use to aggregate the data
const users = {
    firstName: "sid",
    gender: "male"
}

console.log(users["firstName"]);
console.log(users.firstName);

//array of objects
const users1 = [
    {
        firstName: "sid",
        gender: "male"
    },
    {
        firstName: "sita",
        gender: "female"
    },
    {
        firstName: "ram",
        gender: "male"
    }
]

for(let i=0;i<users1.length;i++){
    if(users1[i]["gender"]=="male")
        console.log(users1[i]["firstName"]);
}