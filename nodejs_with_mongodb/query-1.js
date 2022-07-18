const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");
    console.log("all data of customer collection are:");
    console.log("data of customers who lives in 'ahmedabad'");
    dbo.collection("customer").find({}).toArray((err, result) => {
        if(err) throw err;
        console.log(result);
    });

    
    dbo.collection("customer").find({address: 'ahmedabad'}).toArray((err, result) => {
        if(err) throw err;
        console.log(result);
    });

    console.log("data of customers whose name is 'rakesh' and lives in 'ahmedabad'");
    dbo.collection("customer").find({name: 'rakesh', address: 'surat'}).toArray((err, result) => {
        if(err) throw err;
        console.log(result);
    });
});