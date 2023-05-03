const validator = require('./ukdvalidator.js');
const Joi = require('joi');

const data = {
  name: 'deniska',
  age: 155,
  kids: ['pipiska', 'rediska'],
  marriage: false
};

try {
  validator.validateString(data.name, 0, 50);
  validator.validateNumber(data.age, 0, 150);
  validator.validateArray(data.kids, 0, 4)
  validator.validateBoolean(data.marriage)

  console.log('Validation passed!');
} catch (err) {
  console.error(err.message);
}
