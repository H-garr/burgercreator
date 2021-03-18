var express = require("express");

var router = express.Router();
var burger = require("../models/index.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        // prob have to change this later into more than one object we can pass through
        // handlebars object
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    console.log("Create post",req.body)
    if (req.body.devoured == '1'){
       var consumed = true;
    }else {
      var consumed = false;
    }
    burger.create( [req.body.name, consumed], function(result) {
      res.json({ id: result.insertId });
    });
  });


  router.put("/api/burgers/:id", function(req, res) {
 
    burger.update( "id",req.params.id,function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });


  router.delete("/api/burgers/:id", function(req, res) {
    burger.delete(req.params.id, function(result) {
      
      res.json({ id: result.insertId });
    });
  });




  module.exports = router;

  // we'll make routes here TODO