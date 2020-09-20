// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const router = require("express").Router();
const store = require("../db/store.js")


// ROUTING  


    router.get("/api/notes", function(req, res) {
       store.
       getNotes()
       .then(notes => res.json(notes))
       .catch(err => res.status(500).json(err))
    })


// API POST Requests

router.post("api/notes", function(req, res) {
    if (noteData.length < 0) {
        noteData.push(req.body)
        res.json(true)
    }
    else {
        noteListData.push(req.body)
        res.json(false)
    }
})

// code tocould clear out the notes while working with the functionality.
router.delete("/api/:id", function(req, res) {
    // Empty out the arrays of data
    noteData.length = 0;

    res.json({ ok: true })
  })

  module.exports = router;
