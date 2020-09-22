// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const router = require("express").Router();
const store = require("../db/store.js")


// ROUTING  


    router.get("/api/notes", function(req, res) {
       store.getNotes()
       .then(notes => res.json(notes))
       .catch(err => res.status(500).json(err))
    })


// API POST Requests

router.post("api/notes", function(req, res) {
    store. addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
})

// code to clear out the notes while working with the functionality.
router.delete("/store/:id", function(req, res) {
    store. removeNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
  })

  module.exports = router;
