const fs = require("fs")
const http = require("http")

let server =  http.createServer(function(req,res){
    console.log("req was made from : " + req.url)
    res.writeHead(200, {"Content-Type" : "text/plain"});
    let myReadStream = fs.createReadStream(__dirname + "/files/One.txt", "utf8")
    myReadStream.pipe(res);
})

server.listen(5000, "127.0.0.1")

//server is created with request and response object passed in. res.writehead bears the xteristics 
//of content head which is plain text.
//readstream reads data from file and readable cos of the utf8 encoding.
//read stream is piped to the res which is for the user.

