// You can delete a table or collection using the drop() method

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  dbo.collection("customers").drop(function (err, delOK) {
    if (err) throw err;
    if (delOK)
      console.log("Collection delected");
    db.close();
  })
})