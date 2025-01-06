"use strict";
const express = require('express');
const app = express();
const nodefetch = require('node-fetch');
const coreAPI = 'http://core:8080/data'; // this is the exposed API from core container
app.use(express.json());
app.get('/', (req, res) => {
    const response = nodefetch(coreAPI)
        .then((response) => response.json())
        .then((data) => {
        res.status(200);
        res.send(data);
        // this is a pure json and output as such as well. automatic Content Type : application/json, because data is a json object
        // set content type accordingly for text, html, etc
    })
        .catch(() => {
        res.status(500);
        res.writeContinue('Error fetching data');
        res.end();
    });
});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('app is running on http://localhost:8080 after port forwarding from container to host'));
