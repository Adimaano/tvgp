const express = require("express");
const path = require("path");
const app = express();
const fetch = require("node-fetch");

const coreAPI = "http://core:8080/data"; // this is the exposed API from core container

let dataSet;

async function fetchData() {
  const response = await fetch(coreAPI);
  await response.json().then((data) => (dataSet = data));
  return response;
}

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/core", (req, res) => {
  fetchData().then(() => res.send(dataSet));
});

app.listen(8080);

console.log("Now the server is running in http://localhost:8080");

//Video Reference: https://www.youtube.com/watch?v=PlaVEy1rgVQ&list=WL&index=129
