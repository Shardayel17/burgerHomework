var connection = require("./connections.js");



var orm = {
    selectAll: function (callback) {
        connection.query("SELECT * FROM burgers", function (error, results) {

            if (error) throw error;
            console.log("orm select all" + callback);
            callback(results)
        });
    },



    insertOne: function (BurgerName, callback) {
        connection.query("INSERT INTO burgers SET ?", [{
            BurgerName: BurgerName,
            devoured: false
        }],
            function (error, result) {
                if (error) throw error;
                callback(result);
            });
    },



    updateOne: function (Burger_Id, callback) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{
            devoured: true
        },
        {
            id: Burger_Id
        }],

            function (error, result) {
                if (error) throw error;
                callback(result);
            });

    },

    recreateOne: function (Burger_Id, callback) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{
            devoured: false
        },
        {
            id: Burger_Id
        }],

            function (error, result) {
                if (error) throw error;
                callback(result);

            });
    }
};



module.exports = orm;