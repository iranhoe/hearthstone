var express = require("express");
var bodyParse = require("body-parser");

var app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true}));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function(){
    console.log("Listening on port %s...", server.address().port);
});