const yargs = require("yargs")

const note = require('./note') 

var argv = yargs.argv;
var command = argv._[0]
switch (command) {
    case "read":
        note.readNote(argv.title)
        break
    case "add":
        note.addNote(argv.title,argv.body)
        break
    case "remove":
        note.remove(argv.title)
        break
    case "list":
        note.fetchNotes()
        break
    default:
        console.log("Unknown command")
}