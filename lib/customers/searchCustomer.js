const commonDb = require('../database/operations');
const CUSTOMERDB = 'customers';

function searchCustomer(db, req, res) {
  const customers = db.use(CUSTOMERDB);
  commonDb.find(customers, req.params.id)
  .then((deleteOutput) => {
    res.status(200);
    res.end(JSON.stringify(deleteOutput));
  })
  .catch((err) => {
    console.log(`an error occured : ${err.message}`);
    throw new Error(err.message);
  });
}


module.exports = {
  searchCustomer,
};
