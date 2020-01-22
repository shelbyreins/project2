var express = require("express");
var path = require("path");
var db = require('../models');

var router = express.Router();

router.get("/api/log", function(req, res) {

});

//to insert a new user intot he db
router.post("/api/signup", function(req, res) {
  db.User.create(req.body).then(data=>res.send(data))
});

router.put("/api/log/:id", function(req, res) {

});




module.exports = router;