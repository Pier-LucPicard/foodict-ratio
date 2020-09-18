'use strict';
const _ = require('lodash');
const Unit = require('./unit');
const Validator = require('./validator');

function validateIsOfType(toValidate, constructor, message) {
  if (!(toValidate instanceof constructor)) {
    throw new Error(message);
  }
}

class UnitType {
  constructor(name = '') {
    this.name = name;
    this.validator = [];
  }

  addUnit(unit) {
    validateIsOfType(unit, Unit, 'Expect the parameter of the addUnit function to be of type Unit');

    _.set(this, unit.key, unit);
  }

  addValidator(validatorFunction) {
    validateIsOfType(validatorFunction, Validator, 'Expect the parameter of the addValidator function to be of type Validator');

    this.validator.push(validatorFunction);
  }

  list() {
    return _.reduce(
      _.keys(this),
      (acc, key) => {
        if (this[key] instanceof Unit) {
          acc.push(this[key].format());
        }
        return acc;
      },
      [],
    );
  }

  validate(value, unit) {
    validateIsOfType(unit, Unit, 'Expect the parameter of the validate function to be of type Unit');

    _.each(this.validator, (validator) => {
      validator.validate(value, unit);
    });
  }
}

module.exports = UnitType;
