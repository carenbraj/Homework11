// DEPENDENCIES
const path = requie("path")
const router = require("express").Router()

// ROUTING

// HTML GET Requests
router.get("/*", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/index.html"))
})

router.get("/notes", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/notes.html"))
})

module.exports = router;