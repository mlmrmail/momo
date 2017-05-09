const Joi = require('joi');

module.exports = {
  body: {
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    FatherName: Joi.string().min(3).required(),
    birthyear: Joi.number().integer().min(1900).max(1999),
    email: Joi.string().email().required(),
  },
};
