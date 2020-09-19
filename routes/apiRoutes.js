// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const noteData = require("../data/noteData")
const noteListData = require("../data/noteListData")

// ROUTING  

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
       res.json(noteData) 
    })
    app.get("/api/notes", function(req, res) {
        res.json(noteListData) 
     })
}

// API POST Requests

app.post("api/notes", function(req, res) {
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
app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    noteData.length = 0;
    noteListData.length = 0;

    res.json({ ok: true })
  })
