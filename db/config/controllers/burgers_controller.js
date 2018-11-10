var express = require("express");

var router = express.Router();



var orm = require("../../models/burger.js");



router.get("/", function(req, res) {
    burger.all(function(data) {
      var bobject = {
        burger: data
      };
      console.log(bObject);
      res.render("index", bObject);
    });
  });


  router.post("/api/burger", function(req, res) {
    burger.create([
      "name", " "
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      sleepy: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
})

// var burger = {
//     selectAll: function (callback) {
//         orm.selectAll(function (response) {
//             callback(response);
//         });
//     },

//     recreateOne: function (Burger_Id, callback) {
//         orm.recreateOne(Burger_Id, function (response) {
//             callback(response);

//         });
//     },



//     insertOne: function (BurgerName, callback) {
//         orm.insertOne(BurgerName, function (response) {
//             callback(response);
//         });
//     },


//     updateOne: function (Burger_Id, callback) {
//         orm.updateOne(Burger_Id, function (response) {
//             callback(response);
//         });
//     }
// };



//router export

module.exports = burger;  