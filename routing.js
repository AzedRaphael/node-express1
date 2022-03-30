const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    console.log("req is mad from: " + req.url)
    if(req.url === "/home" || req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    }
    else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + "/about.html").pipe(res);
    }else if(req.url === "/api/object"){
        let myObj = [{name:"raphael", age:30}, {name:"sara", age:20}]
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(myObj))
        //res.end sends the json to the browser
    }else{
        res.writeHead(200, {"Content-Type": "text/html"})
        fs.createReadStream(__dirname + "/404page.html").pipe(res)
    }
})

server.listen(5000, "127.0.0.1")