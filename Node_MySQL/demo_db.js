var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localHost",
  user: "usernane",
  password: "password"
});

con.connect(function (err) {
  // exception handling 
  if (err) throw err;
  console.log("Connected!");
  // query a database
  con.query(sql, function (err, result) {
    if (err) throw err;
    // the result
    console.log("Result: " + result);
  });
});
