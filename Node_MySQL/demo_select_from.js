// To select data from a table in MySQL, use the "SELECT" command
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localHost",
  user: "usernane",
  password: "password",
});

// SELECT * will return all columns
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

// To select a specific column, use SELECT statement, followed by the column name
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
