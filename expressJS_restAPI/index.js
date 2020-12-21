var express = require("express");
var app = express();

const PORT = 3000;

app.get("/", function (req, res) {
  res.send("hi");
});

app.post("/", function (req, res) {
  res.send("Got a POST request");
});

app.listen(PORT);
