const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");

    console.log("data of customers whose mobile number starts with 65 in ascending order of age");
    let query = {mobileno: /^65/g};
    dbo.collection("customer").find(query).sort({age: 1}).toArray((err, result) => {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});