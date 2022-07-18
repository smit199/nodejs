const mongoclient = require('mongodb').MongoClient;
const dburl = "mongodb://localhost:27017/";

mongoclient.connect(dburl, (err, db) => {
    if(err) throw err;
    dbo = db.db("test");
    let data = {
        name: 'rakesh',
        mobileno: '6589741235',
        address: 'rajkot',
        age: 25,
        orders: ['mango', 'apple', 'tennisball']
    }
    dbo.collection("customer").insertOne(data, (err) => {
        if(err) throw err;
        console.log('1 document inserted');
    });

    data = [
        { name: 'jay', mobileno: '6589741245', address: 'ahmedabad', age: 29, orders: ['mango', 'apple', 'tennisball'] },
        { name: 'mohan', mobileno: '9889741235', address: 'ahmedabad', age: 36, orders: ['apple', 'shirt'] },
        { name: 'rakesh', mobileno: '6587641235', address: 'surat', age: 54, orders: ['denim', 'bat', 'tennisball'] },
        { name: 'yash', mobileno: '6589769235', address: 'surat', age: 45, orders: ['cheese', 'apple', 'ghee'] },
        { name: 'jay', mobileno: '6589741223', address: 'rajkot', age: 25, orders: ['crackjack', 't-shirt', 'juice', 'rainsuit'] },
        { name: 'malay', mobileno: '7845741235', address: 'ahmedabad', age: 48, orders: ['mango', 'apple', 'denim', 'umbrella'] },
        { name: 'rakesh', mobileno: '8940251235', address: 'surat', age: 29, orders: ['cheese', 'brush', 'bottle'] },
        { name: 'mohan', mobileno: '6589745735', address: 'ahmedabad', age: 36, orders: ['banana', 'lock', 'pen', 'juice'] },
        { name: 'jay', mobileno: '9856232578', address: 'rajkot', age: 59, orders: ['parle-g', 'ghee', 'cheese', 'butter'] },
        { name: 'yash', mobileno: '7825693412', address: 'rajkot', age: 22, orders: ['jam', 'butter', 'bread'] },
        { name: 'malay', mobileno: '6972564123', address: 'ahmedabad', age: 27, orders: ['apple', 'shirt', 'cheese', 'jam'] }
    ];

    dbo.collection("customer").insertMany(data, (err, result) => {
        if(err) throw err;
        console.log(`${result.insertedCount} documents inserted`);
        db.close();
    });  
});

