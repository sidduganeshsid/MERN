// setTimeout(func, 1000, parameter1, parameter2); //try.

const user = {
    fname: "sid",
    age: 23,
    address: {
        houseNo: "2-14",
        streetNo: 1
    }
}

console.log(user["fname"]);
console.log(user["address"]);

console.log(user.address["streetNo"]);

console.log(user["address"]["houseNo"]);

console.log(user.address.houseNo);