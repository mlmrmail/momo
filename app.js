const express = require('express');
const app = express();
const logger = require('./lib/utils/logger').Logger;
const db = require('./lib/database/mongo_db');
const auth = require('./lib/routers/authenticated.js');

const PORT = 9000;



app.use('/customers', require('./lib/routes/customers')(auth(), db));

app.all('/', (req, res) => {
  res.status(500);
  res.end();
});


app.get('/ready', (req, res) => {
  res.status(200);
  res.end('app is working');
});

app.listen(PORT, () => {
  logger.info(`Server listening on port: ${PORT}`);
});

