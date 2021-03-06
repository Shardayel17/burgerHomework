
var connection = require("../config/connection.js");


var orm = {
  selectAll: function (cb) {
    connection.query("SELECT * FROM burgers", function (err, result) {



      if (err) throw err;
      cb(result);

    });
  },


  insertOne: function (BurgerName, cb) {




    connection.query("INSERT INTO burgers SET ?", [{
      BurgerName: BurgerName,
      devoured: false

    }], function (err, result) {



      if (err) throw err;
      cb(result);

    });

  },



  updateOne: function (burgerId, cb) {
    connection.query("UPDATE burgers SET ? WHERE ?", [{
      devoured: true
    },

    {

      id: burgerId
    }], function (err, result) {
      if (err) throw err;
      cb(result);

    });

  }



};


module.exports = orm;

