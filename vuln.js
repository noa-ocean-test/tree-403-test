const express = require("express");
const app = express();

// refresh marker 2026-10-29 round 4
app.get("/user", function (req, res) {
  // classic CodeQL: js/code-injection
  eval("var x = " + req.query.input);
  res.send("ok");
});

app.get("/health", function (req, res) {
  res.send("refresh-2026-10-29");
});
