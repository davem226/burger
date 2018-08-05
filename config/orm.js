var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    insertOne: function (table, columns, qmarks, values, cb) {
        var query = "INSERT INTO " + table +
            " (" + columns + ")" +
            " VALUES (" + qmarks + ");";

        connection.query(query, values, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    updateOne: function (table, column, value, condition, cb) {
        var query = "UPDATE " + table +
            " SET " + column + "=" + value + 
            " WHERE " + condition;

        connection.query(query, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    }
}

module.exports = orm;