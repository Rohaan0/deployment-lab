"use strict";

var path = require("path");

module.exports = {
  home: function home(req, res) {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  },
  script: function script(req, res) {
    res.sendFile(path.join(__dirname, './server/server.js'));
  }
};