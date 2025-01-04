const app = require('express')();
const nodefetch = require('node-fetch');

const coreAPI = 'http://core:8080/data'; // this is the exposed API from core container

let dataSet: any;


app.get('/', (req: any, res: any) => {
  nodefetch(coreAPI)
  .then( () =>  {
    res.status(200)
    res.write('Hello from the landing page')
    res.end(dataSet)
  })
  .catch( () => {
    res.status(500)
    res.write('Error fetching data')
    res.end(dataSet)
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('app is running on http://localhost:8080 after port forwarding from container to host'));