const app = require('express')();

app.get('/', (req, res) =>
  res.json({message: 'The dockerized frontend container is running and says "Hello World!'})
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('app is running on http://localhost:5001 after port forwarding from container to host'));