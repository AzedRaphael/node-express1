//yargs is a CLI that parses arguments and displays more elegant results
const yargs = require("yargs")

yargs.version("1.1.0")
//console.log(yargs.argv)

yargs.command({
    command: "add",
    describe:"Add a note",
    handler: function(){
        console.log("adding a new note")
    }
})

// let command = process.argv[2]
// if(command === "add"){
//     console.log("adding notes")
// }else if(command === "remove"){
//     console.log("removing notes")
// }

