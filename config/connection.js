var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    // port: '/var/run/mysqld/mysqld.sock',
    socketPath: "/tmp/mysql.sock",
    port: 3306,
    user: "bootcamp",
    password: "notarealpassword",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;