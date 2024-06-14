const fs = require("fs");

//async
fs.readFile("a.txt","utf-8",function(err, data){
    console.log(null);
    console.log(data);
    let words = data.split(" ");
    console.log(words);
    console.log(words.length);

    fs.writeFile();
    data = data + "I am fine";
});