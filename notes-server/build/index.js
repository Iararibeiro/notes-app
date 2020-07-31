"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
app.get('/', function (req, res) {
    res.sendFile('../documentation/index.html', { root: __dirname });
});
app.listen(port, function () {
    console.log("Running server on port " + port);
});
