const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.post("/", function (req, res, next) {
  console.log("+++++++++++++++++++++++++++++++++++");
  console.log(req.body);
  console.log("+++++++++++++++++++++++++++++++++++");
  console.log(req.headers);
  console.log("+++++++++++++++++++++++++++++++++++");
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
