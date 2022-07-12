const express = require('express');
const app = express();
const url = require('url');
const path = require("path");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/getData', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const fname = req.query.fname;
    const lname = req.query.lname;
    const age = req.query.age;
    res.write(`First name is ${fname}\n`);
    res.write(`Last name is ${lname}\n`);
    res.write(`Age is ${age}`);
    console.log(`First name is ${fname}\n`);
    console.log(`Last name is ${lname}\n`);
    console.log(`Age is ${age}`);
    res.end();
});

app.post('/getData', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let body = '';
    req.on('data', (data) => body += data);
    req.on('end', () => {
        let post = qs.parse(body);
        res.write(`First name is ${post.fname}\n`);
        res.write(`Last name is ${post.lname}\n`);
        res.write(`Age is ${post.age}`);
        console.log(post.fname);
        console.log(post.lname);
        console.log(post.age);
        res.end();
    });
});

app.listen(5000);


