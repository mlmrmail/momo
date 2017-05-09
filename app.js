const express = require('express');
const app = express();
const logger = require('./lib/utils/logger').Logger;
const db = require('./lib/database/mongo_db');
const auth = require('./lib/routers/authenticated.js');
const qr = require('./lib/barcode/barcodeGen');

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

app.get('/barcode/:code', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  qr.getQRCode(req.params.code)
  .then((output) => {
    res.end(output);
  })
  .catch((err) => {
    console.log(err.message);
  });
});

app.listen(PORT, () => {
  logger.info(`Server listening on port: ${PORT}`);
});

