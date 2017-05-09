const commonDb = require('../database/operations');
const CUSTOMERDB = 'customers';

function exec(db, req, res) {
  const customers = db.use(CUSTOMERDB);
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
  exec,
};
