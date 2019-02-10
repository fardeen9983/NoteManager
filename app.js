const yargs = require("yargs")

const notes = require('./notes')

var argv = yargs.argv;
var command = argv._[0]
switch (command) {
    case "read":
        var note = notes.readNote(argv.title)
        if (note) {
            console.log("Note found --- \nTitle: ", note.title, "\nBody: ", note.body)
        } else {
            console.log("Note not found")
        }
        break
    case "add":
        var note = notes.addNote(argv.title, argv.body)
        if (note)
            console.log("Note added ---\nTitle: ", note.title, "\nBody: ", note.body)
        else
            console.log("Note already exists")
        break
    case "remove":
        notes.remove(argv.title)
        break
    case "list":
        var list = notes.fetchNotes()
        var i = 0
        list.forEach(ele => { console.log("Note ", ++i, "\nTitle: ", ele.title, "\nBody: ", ele.body, "\n") })
        break
    default:
        console.log("Unknown command")
}