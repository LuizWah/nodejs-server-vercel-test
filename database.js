let notes = [
    {
        id :0,
        title: "My note",
        content: "0",
        time: Date.now()
    },
    {
        id :1,
        title: "My note",
        content: "1",
        time: Date.now()
    },
    {
        id :2,
        title: "My note",
        content: "2",
        time: Date.now()
    }
]

let current_id = 2



function getNotes(searchTerm){
    if(!searchTerm){
        return notes
    }
    return notes.filter(note => note.title.includes(searchTerm) || note.content.includes(searchTerm))
}
exports.getNotes = getNotes

function getNoteId(id){
    return notes.find(note => note.id === id)
}
exports.getNoteId = getNoteId

function addNote(note){
    notes.push({
        id: current_id,
        ...note,
        time: Date.now()
    })
    current_id += 1
}
exports.addNote = addNote

function deleteNote(id){
    notes = notes.filter((note) => note.id !== id)

}
exports.deleteNote = deleteNote




