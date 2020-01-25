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


router.post("/api/signin/", function(req, res) {
  console.log("Checking DB for user....");
  console.log(req);
  // console.log(req.params.username);
  db.User.findOne({
    where: {username:req.body.username
            
    }
  }).then(data=>res.send(data))
});

router.post("/api/alcoholuser/", function(req, res) {
  console.log("Ading alcohol countr....");
  console.log(req);
  // console.log(req.params.username);
  db.Alcoholuser.create(req.body).then(data=>res.send(data))
});

router.post("/api/alcohol/", function(req,res){
  console.log("checking for alcohol id.....")
  db.Alcohol.findOne({
    where:{
      alcoholType: req.body.alcohol
    }
  }).then(data=>res.send(data));
})
router.put("/api/log/:id", function(req, res) {

});




module.exports = router;