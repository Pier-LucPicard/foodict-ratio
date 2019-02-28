

const _ = require('lodash');
const unitsTemperature = require('./units/units_temperature');
const unitsVolume = require('./units/units_volume');
const unitsWeight = require('./units/units_weight');
const unitsMisc = require('./units/units_misc');

const validator = require('./validator/validator');


module.exports = () => {
  const ratio = { units: _.assign({}, unitsVolume, unitsTemperature, unitsWeight, unitsMisc) };

  function formatListReturn(key, unit) {
    return {
      name: key,
      displayName: unit.name,
      symbole: unit.symbole,
      type: unit.type
    };
  }

  ratio.listTypes = function listTypes() {
    return _.keys(_.groupBy(ratio.units, 'type'));
  };

  ratio.listAll = function listAll() {
    return _.map(_.keys(ratio.units), key => formatListReturn(key, ratio.units[key]));
  };

  ratio.listByType = function listByType(type) {
    return _.compact(_.map(_.keys(ratio.units), (key) => {
      if (ratio.units[key].type === type) {
        return formatListReturn(key, ratio.units[key]);
      }

      return undefined;
    }));
  };

  ratio.find = function find(key) {
    return ratio.units[key];
  };

  ratio.converte = function converte(unitAndValueConverte, targetUnitConvert) {
    function validate(unitAndValue) {
      if (ratio.units[unitAndValue.unit].type !== ratio.units[targetUnitConvert].type) {
        throw new Error(`Missmatch of type in conversion.  Cannot convert ${ratio.units[unitAndValue.unit].type} to ${ratio.units[targetUnitConvert].type}`);
      }

      if (validator[ratio.units[unitAndValue.unit].type]) {
        try {
          validator[ratio.units[unitAndValue.unit].type](unitAndValue);
        } catch (error) {
          throw new Error(error);
        }
      }
      return unitAndValue;
    }

    function converteToBase(unitAndValue) {
      if (ratio.units[unitAndValue.unit]) {
        return ratio.units[unitAndValue.unit].conversion_formula(unitAndValue.value);
      }
      return new Error('Invalid temperature unit');
    }

    function convertToTarget(baseUnit, targetUnit) {
      if (ratio.units[targetUnit]) {
        return ratio.units[targetUnit].reverse_conversion(baseUnit);
      }
      return new Error('Invalid target temperature unit');
    }

    function formatResult(targetValue) {
      const result = { value: targetValue, unit: targetUnitConvert };
      return result;
    }

    const convertToTargetUnit = _.partialRight(convertToTarget, targetUnitConvert);

    return _.flow(validate, converteToBase, convertToTargetUnit, formatResult)(unitAndValueConverte);
  };

  ratio.add = (key, unit) => {
    ratio.units[key] = unit;
  };

  return _.omit(ratio, ['units']);
};
