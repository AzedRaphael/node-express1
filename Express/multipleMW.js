const express = require("express");
const app = express();
const morgan = require('morgan');

// const {authorize,logger} = require("./data.js")

//app.use([authorize,logger])

//app.use(express.static("./public"))

app.use(morgan("tiny"))

app.get("/", (req,res)=>{
    res.send("Home Page")
});

app.get("/api/items", (req,res)=>{
    console.log(req.user)
    //req.user is attached from authorize in data.js but used in any routes in another js file.That is ..
    //the power of middleware

    res.send("Items Page")
});

app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
});