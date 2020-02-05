var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {  
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signUp.html"));
});

router.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/calendar.html"));
});

router.get("/alcohol", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addAlcohol.html"));
});

module.exports = router;