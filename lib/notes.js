const fs = require('fs');
const path = require('path');

const createNewNote = (note, notesArray) => {
    // adds new note to notes array
    notesArray.push(note)

    // saves notes array to db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

// finds specific note by ID from notes array
const findById = (id, notesArray) => {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

// edits existing note
const editNote = (editedNote, notesArray) => {
    // gets index of note to be edited
    const index = notesArray.findIndex(note => note.id === editedNote.id);

    // removes old note, inserts revised note
    notesArray.splice(index, 1);
    notesArray.splice(index, 0, editedNote);

    // rewrites db.json with revised note
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
};

const removeNote = (note, notesArray) => {
    // removes specific note from notes array
    const index = notesArray.indexOf(note);
    notesArray.splice(index, 1);

    // rewrites db.json with new array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

module.exports = { createNewNote, findById, editNote, removeNote };