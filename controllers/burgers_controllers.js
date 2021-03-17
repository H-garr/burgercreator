var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");
// then we do home route
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        // handlebars object
        burgercats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
module.exports = router;

router.get("/", function(req, res) {
    cat.all(function(data) {
    
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/cats", function(req, res) {
    cat.create([
      "name", "sleepy"
    ], [
      req.body.name, req.body.sleepy
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  // we'll make routes here TODO