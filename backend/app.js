const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());

let notDB = require("./notDB.json");

app.get("/get", function (req, res) {
  console.log("Req");
  res.send(notDB);
});

app.post("/create", function (req, res) {
  console.log("Req");
  notDB.push(req.body);
  res.send(req.body);
});

app.put("/set/:id", function (req, res) {
  console.log("Req");
  notDB[req.params.id] = req.body;
  res.send(req.body);
});

app.delete("/delete/:id", function (req, res) {
  console.log("Req");
  notDB.splice(req.params.id, 1);
  res.send(true);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
