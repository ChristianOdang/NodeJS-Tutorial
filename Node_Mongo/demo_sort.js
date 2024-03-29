// use the sort() method to sort the result in ascending or descending order
// use {name: 1} to sort ascending
// use {name: -1} to sort descending

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: 1 };

  dbo
    .collection("customers")
    .find()
    .sort(mysort)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
