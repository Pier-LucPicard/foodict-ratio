'use strict';

class Validator {
  #validationFunction = undefined;

  constructor(name = '', validationFunction = () => true) {
    this.name = name;
    this.#validationFunction = validationFunction;
  }

  validate(value, unit) {
    this.#validationFunction(value, unit);
  }
}

module.exports = Validator;
