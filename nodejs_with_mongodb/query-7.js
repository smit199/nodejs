const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");

    console.log("data of customers who lives in ahmedabad in descending order of age");
    let query = {address: 'ahmedabad'}
    dbo.collection("customer").find(query).sort({age: -1}).toArray((err, result) => {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});