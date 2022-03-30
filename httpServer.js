const http = require("http")
        //request 
// const server = http.createServer((req, res)=>{
//     res.write("welcome to our home page")
//     res.end()
// })
// server.listen(5000)
        //requesting data for home,about and non-existing page
// const server = http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("Welcome to home page")
//     }
//     if(req.url === "/about"){
//         res.end("this is the about page")
//     }
//     res.end(`<p>This page does not exist </p>`)
// })
// server.listen(5000)

const server = http.createServer((req,res)=>{
    console.log("req was made by : " + req.url)
    if(req.url === "/home" || req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + "/index.html").pipe(res)
    }
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("welcome to website")
})
server.listen(5000, "127.0.0.1")