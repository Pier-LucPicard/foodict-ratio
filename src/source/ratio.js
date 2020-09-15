'use strict';
const _ = require('lodash');
const UnitType = require('./unit_type');
const Unit = require('./unit');
const Validator = require('./validator');
const { flow } = require('lodash');

function validateIsOfType(toValidate, constructor, message) {
  if (!(toValidate instanceof constructor)) {
    throw new Error(message);
  }
}

class Ratio {
  constructor() {
    this.ratio = {};
    this.Unit = Unit;
    this.Validator = Validator;
    this.Ratio = Ratio;
  }

  createUnit(...args) {
    return new Unit(...args);
  }

  createValidator(...args) {
    return new Validator(...args);
  }

  registerUnit(unit) {
    validateIsOfType(unit, Unit, 'Expect the parameter of the registerUnit function to be of type Unit');

    if (!this.ratio[unit.type]) {
      this.ratio[unit.type] = new UnitType(unit.type);
    }
    this.ratio[unit.type].addUnit(unit);
  }

  registerUnits(units) {
    validateIsOfType(units, Array, 'Expect the parameter of the registerUnits function to be an array');

    _.forEach(units, (u) => this.registerUnit(u));
  }

  registerUnitTypeValidator(type, validatorFunction) {
    validateIsOfType(validatorFunction, Validator, 'Expect the second parameter of the registerUnitTypeValidator function to be an Validator');

    this.ratio[type].addValidator(validatorFunction);
  }

  listTypes() {
    return _.map(_.keys(this.ratio), (key) => {
      return this.ratio[key].name;
    });
  }

  list(type = null) {
    if (type) {
      return this.ratio[type].list();
    }

    return _.flatMap(_.keys(this.ratio), (key) => {
      return this.ratio[key].list();
    });
  }

  find(type, key) {
    return this.ratio[type][key].format();
  }

  converte(value, unitKey, targetUnitKey) {
    const fromUnitFormatted = _.find(this.list(), (e) => e.key === unitKey);
    const toUnitFormatted = _.find(this.list(), (e) => e.key === targetUnitKey);

    if (!fromUnitFormatted || !toUnitFormatted) {
      throw new Error(`Unknown unit ${unitKey} or ${targetUnitKey}.`);
    }

    if (fromUnitFormatted.type !== toUnitFormatted.type) {
      throw new Error(`Missmatch of type in conversion.  Cannot convert ${fromUnitFormatted.type} to ${toUnitFormatted.type}`);
    }
    const unitType = this.ratio[fromUnitFormatted.type];
    if (!unitType) {
      throw new Error(`Unknown type in conversion.  Cannot convert ${fromUnitFormatted.type} type`);
    }

    const fromUnit = this.ratio[fromUnitFormatted.type][fromUnitFormatted.key];
    const toUnit = this.ratio[toUnitFormatted.type][toUnitFormatted.key];

    unitType.validate(value, fromUnit);
    const baseValue = fromUnit.converteToBase(value);
    const convertedValue = toUnit.converteFromBase(baseValue);

    return { value: convertedValue, unit: targetUnitKey };
  }
}

module.exports = Ratio;
