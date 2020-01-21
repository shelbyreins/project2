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

router.get("/api/signin/:username", function(req, res) {
  console.log("Checking DB for user....");
  console.log(req);
  console.log(req.params.username);
  db.User.findOne({
    where: {username:req.params.username
    }
  }).then(function(results){
    console.log("from api route line 24")
    console.log(results.password);
    // console.log(res.json(results));
  })
});

router.put("/api/log/:id", function(req, res) {

});


module.exports = router;