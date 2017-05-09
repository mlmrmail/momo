const _ = require('lodash');
const customer = require('../customers/');
const customersValidation = require('../validate/customers');
const validate = require('express-validation');

function customers(router, db) {
  router.post('/add', validate(customersValidation.addCustomer), _.partial(customer.addCustomer, db));
  router.post('/delete/:id', validate(customersValidation.deleteCustomer), _.partial(customer.deleteCustomer, db));
  router.put('/update/:id', validate(customersValidation.editCustomer), _.partial(customer.editCustomer, db));

  return router;
}

module.exports = customers;
