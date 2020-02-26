var express = require("express");
var app = express();
var userController = require("./controllers/userController");

app.get("/", userController.showAll);

module.exports = app;