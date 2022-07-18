const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");

    console.log("deleting all data of customer whose name is 'malay'");
    query = {name: 'malay'};
    dbo.collection("customer").deleteMany(query, (err, result) => {
        if(err) throw err;
    });

    query = {name: 'malay'};
    dbo.collection("customer").find(query).toArray((err, result) => {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});