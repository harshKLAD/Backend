var express = require("express");
var app = express();

const PORT = 3000;

app.get("/", function (req, res) {
  res.send("hi");
});

app.post("/", function (req, res) {
  res.send("Got a POST request");
});

app.put("/", function (req, res) {
  res.send({ hi: "yeo", j: "jijj", h: 999 });
});

app.delete("/", function (req, res) {
  res.send("deleting");
});

app.listen(PORT, () => {
  console.log("server running");
});
