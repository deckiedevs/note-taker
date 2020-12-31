const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../db/db');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

    createNewNote(req.body, notes);

    res.json(req.body);
});

module.exports = router;