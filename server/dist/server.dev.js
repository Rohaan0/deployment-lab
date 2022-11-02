"use strict";

var express = require('express');

var cors = require('cors');

require('dotenv').config();

var path = require('path');

var app = express();
app.use(express.json());
app.use(cors());
app.get;

var _require = require("./controllers/controller.js"),
    home = _require.home;

app.get("/", home);
app.get("/", script);
var PORT = process.env.PORT;
console.log(__dirname);
app.listen(PORT, function () {
  return console.log("server listening at port ".concat(PORT));
});