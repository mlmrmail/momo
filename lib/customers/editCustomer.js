const commonDb = require('../database/operations');
const CUSTOMERDB = 'customers';

function editCustomer(db, req, res) {
  const customers = db.use(CUSTOMERDB);
  commonDb.updateById(customers, req.params.id, req.body)
  .then((updateOutput) => {
    res.status(200);
    res.end(JSON.stringify(updateOutput));
  })
  .catch((err) => {
    console.log(`an error occured : ${err.message}`);
    throw new Error(err.message);
  });
}


module.exports = {
  editCustomer,
};
