
var orm = require("../config/orm.js");




var burger = {
    selectAll: function (callback) {
        orm.all("Burgers", function (response) {
            callback(response);
        });
    },



    insertOne: function ( cols, vals, callback) {
        orm.create("Burgers", cols, vals, function (response) {
            callback(response);
        });
    },

    updateOne: function (objcolVals,condition, callback) {
        orm.update("Burgers", objcolVals, condition, function (response) {
            callback(response);
        });
    },


    recreateOne: function (condition, callback) {
        orm.delete("Burgers", condition, function (response) {
            callback(response);
        });
    }
};



module.exports = burger;  