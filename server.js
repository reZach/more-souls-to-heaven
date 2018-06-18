const express = require("express");
const app = express();

// Set template engine
app.set("view engine", "ejs");

// Allow access to the "public" folder
app.use(express.static("public"));

// Listen on "/"
app.get("/", function (req, res){
    res.render("index");
});

// Create the web server
app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});