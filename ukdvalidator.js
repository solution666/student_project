const Joi = require('joi');

const validateJSON = (data, schema) => {
  const result = schema.validate(data);
  if (result.error) {
    throw new Error(result.error.details[0].message);
  }
};

const validateNumber = (value, min, max) => {
  const schema = Joi.number().min(min).max(max);
  validateJSON(value, schema);
};

const validateString = (value, min, max) => {
  const schema = Joi.string().min(min).max(max);
  validateJSON(value, schema);
};

const validateArray = (value, min, max) => {
  const schema = Joi.array().min(min).max(max);
  validateJSON(value, schema);
};

const validateBoolean = (value) => {
  const schema = Joi.boolean();
  validateJSON(value, schema);
};

module.exports = {
  validateNumber,
  validateString,
  validateArray,
  validateBoolean,
  validateJSON
};
