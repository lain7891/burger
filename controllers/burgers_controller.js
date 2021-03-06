const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data,
    //   style: 'burger_style.css'
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// ADDED NEW BURGER
router.post("/api/burgers", function(req, res) {
    console.log(req.body);
  burger.insertOne([
    "burger_name", "devoured",
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
console.log(req.body);
  burger.updateOne({
    devoured: 1,
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});




module.exports = router;