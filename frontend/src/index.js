const app = require('express')();
const fetch = require('node-fetch');

const coreAPI = 'http://core:8080/data'; // this is the exposed API from core container

let dataSet;

async function fetchData() {
  const response = await fetch(coreAPI);
  await response.json().then(data => dataSet = data);
  return response;
}

app.get('/', (req, res) => {
  fetchData().then(() => res.send(dataSet));
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('app is running on http://localhost:5001 after port forwarding from container to host'));