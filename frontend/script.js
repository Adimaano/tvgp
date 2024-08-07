const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8080);

console.log("Now the server is running in http://localhost:8080");

//Video Reference: https://www.youtube.com/watch?v=PlaVEy1rgVQ&list=WL&index=129
