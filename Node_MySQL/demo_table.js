// use the CREATE TABLE statement to create table in MySQL

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localHost",
  user: "usernane",
  password: "password",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  // Adding a primary key
  var sql =
    "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
