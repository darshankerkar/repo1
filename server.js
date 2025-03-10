var express = require("express");
var app = express();

app.use(express.static("public"));

app.use("/assets", express.static(__dirname + "/public/assets"));

var server = app.listen(3000, function () {
  var port = server.address().port;
});