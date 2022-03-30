const http = require("http")
const fs = require("fs")

let myReadStream = fs.createReadStream(__dirname + "/files/One.txt", "utf-8")
let myWriteStream = fs.createWriteStream(__dirname + "/files/writeMe.txt");

myReadStream.on("data", function(chunk){
    console.log("new chunck recieved")
    //console.log(chunk)
    myWriteStream.write(chunk);
})
//streams are used to quickly read and write data to clients.
//myreadStream recieves a chunk of data from files/one.txt and convertd to utf-8. 
//when chuncks of data are recieved they are passed as an on event lsitener.