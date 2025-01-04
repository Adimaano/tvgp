const app = require('express')();
const nodefetch = require('node-fetch');

const coreAPI = 'http://core:5000/data'; // this is the exposed API from core container

let dataSet: any;


app.get('/', (req: any, res: any) => {
  const response = nodefetch(coreAPI);

  res.write('Hello from landing page!\n');
  res.end("response.text()");
  // fetchData()
  //   .then( () =>
  //     res.send(dataSet)
  //   );
});


// async function fetchData() {
//   const response = await nodefetch(coreAPI);
//   await response.json().then((data: any) => dataSet = data);
//   return response;
// }

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('app is running on http://localhost:8080 after port forwarding from container to host'));