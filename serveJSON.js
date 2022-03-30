const http = require("http")
const fs = require("fs")

const server = http.createServer(function(req,res){
    console.log("req was made from : " + req.url)
    res.writeHead(200, {"Content-Type": "application/json"})
    let myObj = {
        name: "raph",
        job: "software-developer",
        age: 30
    };
    res.end(JSON.stringify(myObj))
})

server.listen(5000, "127.0.0.1")

//this is used for api http request that can be rendered with the page is loaded or requested for by the end user.
