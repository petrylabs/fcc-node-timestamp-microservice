const express = require("express");
const app = express();
const port = 80;

const path = require("path");

const api = require("./api.js");

app.get('/api/:date?', function(req, res) {
  console.log('dateParam', req.params.date);
  const resObj = api.getTimestamp(req.params.date);
  console.log('resObj', resObj);
  res.json(resObj);
});

app.get("/", function(req, res) {
  console.log('root, eh?');
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});