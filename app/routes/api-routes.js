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

<<<<<<< HEAD
router.put("/api/calendar/:id", function(req, res) {
=======

router.post("/api/signin/", function(req, res) {
  console.log("Checking DB for user....");
  console.log(req);
  // console.log(req.params.username);
  db.User.findOne({
    where: {username:req.body.username
            
    }
  }).then(data=>res.send(data))
});

router.put("/api/log/:id", function(req, res) {
>>>>>>> f2c6b154f38511afc0895780d876e09c24953e4c

});




module.exports = router;