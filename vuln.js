const express = require("express");
const app = express();

app.get("/user", function (req, res) {
  // classic CodeQL: js/code-injection
  eval("var x = " + req.query.input);
  res.send("ok");
});