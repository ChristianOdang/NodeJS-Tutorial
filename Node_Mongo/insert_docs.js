// Insert Multiple document
// To insert multiple documents into a collection, use insertMany()
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { _id: 154, name: "Johnny", address: "Highway 465" },
    { _id: 155, name: "Hannah", address: "Apple 23" },
    { _id: 156, name: "Sandy", address: "Valley 345" }
  ];

  dbo.collection("customers").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of docs" +
      res.insertedCount);
    db.close();
  });
});
