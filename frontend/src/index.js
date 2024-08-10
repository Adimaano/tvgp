const app = require('express')();
const fetch = require('node-fetch');
const coreAPI = 'http://localhost:5000/data'; // this is the exposed API from core container -> is localhost the write address?

fetch(coreAPI)
  .then(APIresp => APIresp.json())
  .catch(err => console.log(err));


app.get('/', (req, res) =>
  res = APIresp// testing cross container communication
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('app is running on http://localhost:5001 after port forwarding from container to host'));