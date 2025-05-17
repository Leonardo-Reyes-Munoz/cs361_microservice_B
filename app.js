const express = require('express');
const app = express();
const port = 3010;

//routers
const debtRouter = require('./routes/pets');

app.get('/', (req, res) => {
  res.send('Microservice B');
});

app.use('/api/v1/pets', debtRouter);

app.listen(port, () => {
  console.log('Microservice A listening on port 3010...');
});
