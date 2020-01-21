var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/signUp.html"));
});


module.exports = router;