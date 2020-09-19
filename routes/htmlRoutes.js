// DEPENDENCIES
const path = requie("path")

// ROUTING
module.exports = function(app) {
// HTML GET Requests
app.get("/index", function (req, res) {
    res.sendFile(path.join(_dirname, "../htmlFiles/index.html"))
})

app.get("/index", function (req, res) {
    res.sendFile(path.join(_dirname, "../htmlFiles/notes.html"))
})
}