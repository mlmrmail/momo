const Joi = require('joi');

module.exports = {
  params: {
    id: Joi.string().required(),
  },
  body: {
    firstName: Joi.string().min(3),
    lastName: Joi.string().min(3),
    FatherName: Joi.string().min(3),
    birthyear: Joi.number().integer().min(1900).max(1999),
    email: Joi.string().email(),
  },
};
