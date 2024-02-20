// create a database named "mydb"
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localHost",
  user: "usernane",
  password: "password",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  })
})