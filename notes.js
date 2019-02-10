const fs = require('fs')

var addNote = (title, body) => {
    var notes = fetchNotes()
    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter((note) => note.title == title)
    if (duplicateNotes.length == 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    } 
}

var remove = (title) => {

}

var readNote = (title) => {
    var notes= fetchNotes()
    var note = notes.filter((note) => note.title == title)
    return note[0]
}

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json'))
    } catch (e) {
        return []
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    addNote, fetchNotes, readNote, remove
}