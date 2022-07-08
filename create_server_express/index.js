const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.json({msg: "This is home page"}));
app.get("/login", (req, res) => res.json({msg: "This is login page"}));
app.get("/register", (req, res) => res.json({msg: "This is register page"}));

app.listen(5000, () => console.log("server is running"));