const commonDb = require('../database/operations');

function addCustomer(db, req, res, next) {
  const customers = db.use('customers');
  commonDb.insert(customers, req.body)
  .then((insertOutput) => {
    res.status(200);
    res.end(JSON.stringify(insertOutput));
  })
  .catch((err) => {
    console.log(`an error occured : ${err.message}`);
    throw new Error(err.message);
  });
}


module.exports = {
  addCustomer,
};
