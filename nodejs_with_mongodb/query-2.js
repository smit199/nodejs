const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");

    console.log("data of customers who lives in 'ahmedabad'");
    let query = {address: 'ahmedabad'};
    dbo.collection("customer").find(query).toArray((err, result) => {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});