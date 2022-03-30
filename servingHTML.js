const fs = require("fs")
const http = require("http")

let server =  http.createServer(function(req,res){
    console.log("req was made from : " + req.url)
    res.writeHead(200, {"Content-Type" : "text/html"});
    let myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8")
    myReadStream.pipe(res);
})

server.listen(5000, "127.0.0.1")
