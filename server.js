// Dependencies
const express = require("express")
const fs = require("fs")

// Sets up express server
const app = express()
const PORT = process.env.PORT || 8080

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function() {
    console.log("App listen in PORT: " + PORT)
})