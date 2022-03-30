const {readFileSync, writeFileSync} = require("fs")

//readFileSync() carries a path and the utf-8 for encoding unicode characters
const first = readFileSync("./files/One.txt", "utf8")
console.log(first)
//writeFileSync overwrites or creates an existing files content if not present. Itcan also append other info

//this creates three.txt file and writes the content after the path to the file.
writeFileSync("./files/three.txt", `hello world, we receive info from one text file and it is ${first}`)

//this creates three.txt file and appends the content to an existing content in the path to the file.
const three = writeFileSync("./files/three.txt", `hello world,we area appending this new file`, {flag:"a"})
const readThree = readFileSync("./files/three.txt", "utf8")
console.log(readThree)