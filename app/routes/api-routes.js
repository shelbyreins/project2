var express = require("express");
var path = require("path");
var db = require('../models');

var router = express.Router();


//to insert a new user into the db
router.post("/api/signup", function(req, res) {
  db.User.create(req.body).then(data=>res.send(data))

});

<<<<<<< HEAD
//User Sign in
=======
router.get("/api/signin/", function(req, res){
  
})

>>>>>>> 9744e5a45bb38bb5dfbb8e17cfd4c7fac32754dc
router.post("/api/signin/", function(req, res) {
  console.log("Checking DB for user....");
  console.log(req);
  // console.log(req.params.username);
  db.User.findOne({
    where: {username:req.body.username
      
    }
  }).then(data=>res.send(data))
});

//Loggin alcohol count
router.post("/api/alcoholuser/", function(req, res) {
  console.log("Ading alcohol countr....");
  console.log(req);
  // console.log(req.params.username);
  db.Alcoholuser.create(req.body).then(data=>res.send(data))
});

//Querying Alcohol table
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