const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");

    console.log("data of customers who lives in 'surat' or age is less than 25");
    let query = {$or: [{address: 'surat'}, {age: {$lt: 25}}]};
    dbo.collection("customer").find(query).toArray((err, result) => {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});