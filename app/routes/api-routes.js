var express = require("express");
var path = require("path");
var db = require('../models');

var router = express.Router();



//to insert a new user into the db
router.post("/api/signup", function(req, res) {
  db.User.create(req.body).then(data=>res.send(data))

});

router.get("/api/signin/", function(req, res){
  
})

router.post("/api/signin/", function(req, res) {
  console.log("Checking DB for user....");
  console.log(req);
  // console.log(req.params.username);
  db.User.findOne({
    where: {username:req.body.username
      
    }
  }).then(data=>res.send(data))
});





module.exports = router;