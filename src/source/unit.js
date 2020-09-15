'use strict';

const _ = require('lodash');

class Unit {
  static generateKey(name) {
    return _.snakeCase(_.deburr(name));
  }

  constructor(name = '', symbole = '', conversion_formula = _.identity, reverse_conversion = _.identity, type = '') {
    this.key = Unit.generateKey(name);
    this.name = name;
    this.symbole = symbole;
    this.conversion_formula = conversion_formula;
    this.reverse_conversion = reverse_conversion;
    this.type = type;
  }

  format() {
    return {
      key: this.key,
      name: this.name,
      symbole: this.symbole,
      type: this.type,
    };
  }

  converteToBase(value) {
    return this.conversion_formula(value);
  }

  converteFromBase(value) {
    return this.reverse_conversion(value);
  }
}

module.exports = Unit;
