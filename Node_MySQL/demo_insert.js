// To fill a table in MySQL, use the "INSERT INTO" statement
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localHost",
  user: "usernane",
  password: "password",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  var sql = "INSERT INTO customers (name, address) VALUES('Comapny Inc', 'Highway 345')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted")
  });
});