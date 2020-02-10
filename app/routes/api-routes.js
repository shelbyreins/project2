var express = require("express");
var path = require("path");
var db = require('../models');
var SHA256 = require('crypto-js/sha256');
var crypto = require('crypto-js')
var router = express.Router();

//to insert a new user into the db
router.post("/api/signup", function (req, res) {
  req.body.password = JSON.stringify(SHA256(req.body.password).words);
  db.User.create(req.body).then(data => res.send(data))

});

router.get("/api/alcoholuser/:id")


router.post("/api/signin", function (req, res) {
  db.User.findOne({
    where: {
      username: req.body.username
    }
  }).then(data => {
    if (JSON.stringify(SHA256(req.body.password).words) === data.dataValues.password) {
      res.json(data)
    } else {
      res.send(null)
    }
  });
});

//Loggin alcohol count
router.post("/api/alcoholuser/", function (req, res) {
  console.log("Adding alcohol counter....");
  db.Alcoholuser.create(req.body).then(data => res.send(data))
});


//Querying Alcohol table
router.post("/api/alcohol/", function (req, res) {
  console.log("checking for alcohol id.....")
  db.Alcohol.findOne({
    where: {
      alcoholType: req.body.alcohol
    }
  }).then(data => res.send(data)
  );
})

router.get("/api/alcoholuser/:id/:date", function (req, res) {
  console.log("Querying for card display.....");
  console.log("req.params.date" + req.params.date);
  db.Alcoholuser.findAll({
    where: {
      UserId: req.params.id,
      date: req.params.date
    }
  }).then(data => {
    console.log("Here is api data: " + data);
    res.send(data);
  });


});

module.exports = router;