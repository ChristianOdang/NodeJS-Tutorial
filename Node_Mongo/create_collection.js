// Creating a collection and inserting a document
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // insert into collection
  var myobj = { name: "Company Inc", address: "Highway 37" };

  dbo.createCollection("customers").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("one document inserted");
    db.close();
  });
});