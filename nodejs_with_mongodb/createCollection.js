const { Db } = require('mongodb');

const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");
    dbo.createCollection("customer", (err) => {
        if(err) throw err;
        console.log("customer collection is created");
        db.close();
    });
});