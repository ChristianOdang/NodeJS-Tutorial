// use deleteOne() method to delete a document
// The first parameter is a query object defining which document to delete
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  // delete all docs where the address starts from O
  var manyQuery = { address: /^O/ };

  dbo.collection("customers").deleteMany(manyQuery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  })
})