const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000 //environmental variables
// app.use(bodyParser.json());
app.use(express.json());
/////////////////////////////////////////////


app.post("/backend-api/conversation",(req,res)=>{
    // console.log(req.body);
    // res.send("sent conversation")
    const message = req.body.message;//to run it you need bodyParser
    // const message = req.query.message; //sending queries in url bar.
    //from ML model
    res.json({
        output: "2+2=4"
    })
})

//how link fend and express
//using fetch (fetch is a web api)


///////////////////////////////////////////////
app.get("/",(req,res)=>{
    // res.status(401).send("Hello World from the server");
    res.send("Hello World from the server");
})

app.listen(port,()=>{
    console.log("app is listening");
})

