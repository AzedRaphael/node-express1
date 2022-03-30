const http = require("http")
const {arrayOfObj} = require ("./appBasic.js")
const path = require("path")
const fs = require("fs")


const server = http.createServer((req,res)=>{
    switch (req.url) {
        case "/":
            const readHTML = path.join(__dirname, "views/indexView.html")
            const readPathFile = fs.readFileSync(readHTML, "utf-8")
            res.writeHead("200", {"Content-Type": "text/html"})
            res.write(readPathFile)
            res.end()
            break;

        case "/about":
            res.writeHead("200", {"Content-Type": "text/html"})
            res.write("<h2>About page</h2>")
            res.end()
            break;
            
        case "/contact":
            res.writeHead("200", {"Content-Type": "text/html"})
            res.write("<h2>Contact page</h2>")
            res.end()
            break;

        // case "/contact":
        //     res.writeHead("200", {"Content-Type": "text/html"})
        //     res.write("<h2>Contact page</h2>")
        //     res.end()
        //     break;

        case "/student":
            res.writeHead("200", {"Content-Type": "application/json"})
            res.write(JSON.stringify(arrayOfObj))
            res.end()
            break;

        default:
            res.writeHead("404", {"Content-Type": "text/html"})
            res.write("<h2>Page does not exist</h2>")
            res.end()
            break;
    }
});

server.listen(5000, ()=>{
    console.log("server is running on http://localhost:5000")
})