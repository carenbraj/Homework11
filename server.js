// Dependencies
const express = require("express")
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

// Sets up express server
const app = express()
const PORT = process.env.PORT || 8080

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static("public"));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function() {
    console.log("App listen in PORT: " + PORT)
})