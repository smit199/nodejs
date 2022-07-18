const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");

    console.log("updating all data of customer whose name is 'yash'");
    query = {name: 'yash'};
    newvalue = {$set: {address: 'amreli'}};
    dbo.collection("customer").updateMany(query, newvalue, (err, result) => {
        if(err) throw err;
        console.log(`${result.modifiedCount} documents are updated`);
    });

    query = {name: 'yash'};
    dbo.collection("customer").find(query).toArray((err, result) => {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});