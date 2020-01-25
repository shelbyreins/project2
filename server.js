var express = require("express");

var bodyParser = require("body-parser");
var SHA256 = require("crypto-js/sha256");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("./app/public"));


var htmlRoutes = require("./app/routes/html-routes");
app.use(htmlRoutes);

var apiRoutes = require("./app/routes/api-routes");
app.use(apiRoutes);

// app.use(console.log(SHA256("Message")));



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});