
var orm = require("../config/orm.js");




var burger = {
selectAll: function(callback) {
orm.selectAll(function (response) {
callback(response);
});
},

     

insertOne: function(BurgerName, callback) {
orm.insertOne(BurgerName, function(response) {
callback(response);
});
},

updateOne: function(Burger_ID, callback) {
orm.updateOne(Burger_ID, function(response) {
callback(response);
 });
 },

    
 recreateOne: function(Burger_Id, callback) {
 orm.recreateOne(Burger_Id, function(response) {
 callback(response);
});
}
};



module.exports = burger;  