const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");

    console.log("deleting first data of customer whose name is 'mohan'");
    query = {name: 'mohan'};
    dbo.collection("customer").deleteOne(query, (err, result) => {
        if(err) throw err;
        console.log(`1 documents is deleted`);
        db.close();
    });
});