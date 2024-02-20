// Finding documents in a collection with regex
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: /^S/ };

  dbo.collection("customers").find(query).toArray(function (err, results) {
    if (err) throw err;
    console.log(results);
    db.close();
  });
});