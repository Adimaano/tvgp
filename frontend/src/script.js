/* const app = require("express")();

app.get("/", (req, res) =>
  res.json({
    message:
      'The dockerized frontend container is running and says "Hello World! test test test',
  })
);

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(
    "app is running on http://localhost:5000 after port forwarding from container to host"
  )
);
 */
/* 
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("src/index.html").pipe(res);
});

server.listen(process.env.PORT || 8080);
 */

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
