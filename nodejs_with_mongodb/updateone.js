const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");

    console.log("updating first data of customer whose name is 'rakesh'");
    let query = {name: 'rakesh'};
    let newvalue = {$set: {name: 'rakesh soni', address: 'bhavnagar'}};
    dbo.collection("customer").updateOne(query, newvalue, (err, result) => {
        if(err) throw err;
        console.log("1 document is updated. updated document is");
        db.close();
    });
});