var express = require("express");

var router = express.Router();

var orm = require("../models/orm.js");

var queryTable = "burgers";

// Define routes and what will happen upon specific requests to those routes
router.get("/", function(req,res) {
    orm.selectAll(queryTable, function(data) {
        // Data rendered using handlebars must be in form of an object
        handlebarsObj = {
            burgers: data
        };

        res.render("index", handlebarsObj);
    });
});

router.post("/api/burgers", function(req,res) {
    orm.insertOne(queryTable, "burger_name", "?", req.body.burgerName, function(result) {
        // Respond to browser the id of the new burger
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    orm.updateOne(queryTable, "devoured", 1, condition, function(result) {
        // If no rows changed throw error
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;