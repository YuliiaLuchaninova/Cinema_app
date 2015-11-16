var mysql = require("mysql");

var db = mysql.createConnection({
    host: "localhost",
    user: "yuliia",
    password: "team7",
    database: "cinema",
    multipleStatements: true
});

db.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');

});


//db.end(function(err) {
//    // The connection is terminated gracefully
//    // Ensures all previously enqueued queries are still
//    // before sending a COM_QUIT packet to the MySQL server.
//    console.log('Connection closed');
//});


module.exports = db;