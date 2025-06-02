const express = require('express');
const app = express();
const cors = require('cors');
const port = 3010;

app.use(cors());

//routers
const imagesRouter = require('./routes/images');

app.get('/', (req, res) => {
  res.send('Microservice B: Pet Adoption App Images');
});

app.use('/api/v1/images', imagesRouter);

app.listen(port, () => {
  console.log('Microservice B(Images): listening on port 3010...');
});
