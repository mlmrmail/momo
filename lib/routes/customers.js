const _ = require('lodash');
const addCustomer = require('../customers/addCustomer');
const editCustomer = require('../customers/editCustomer');
const deleteCustomer = require('../customers/deleteCustomer');


function customers(router, db) {
  router.post('/', _.partial(addCustomer.addCustomer, db));
//   router.get('/', _.partial(appointmentGet.getAppointments, db));
//   router.put('/:appointment_id', validate(appointmentValidation.appointment_put), _.partial(appointmentPut.updateAppointment, db));

  return router;
}

module.exports = customers;
