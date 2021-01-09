const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../db/db');
const { createNewNote, findById, editNote, removeNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {

    // creates new note if id exists, otherwise edits existing note
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNewNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }

    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    removeNote(note, notes);
    res.json();
});

module.exports = router;