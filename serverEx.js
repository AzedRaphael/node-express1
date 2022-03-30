const http = require("http");
const fs = require("fs")
const path = require("path")
const {data} = require("./Express/data")

const server = http.createServer((req,res)=>{
    switch(req.url){
        case "/":
            const homePagePath = path.join(__dirname, "./indexClass.html")
            const readFilePath = fs.readFileSync(homePagePath, "utf8")
            res.writeHead(200, {"Content-type": "text/html"});
            res.write(readFilePath)
            res.end();
            break;

        case "/student":
            res.writeHead(200, {"Content-type": "application/json"})
            res.write(JSON.stringify(data));
            res.end();
            break;

        case "/contact":
            // const contactPagePath = path.join(__dirname, "./contact.html")
            const readContactPath = fs.readFileSync("./contact.html", "utf8")
            //path is used to call a folder not a single file.
            res.writeHead(200, {"Content-type": "text/html"});
            res.write(readContactPath)
            res.end();
            break;

        default:
            res.writeHead(404, {"content-type": "text/html"});
    }
})

server.listen(5000,()=>{
    console.log("server running on port 5000")
})