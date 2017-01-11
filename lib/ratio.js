'use strict';

const unitsTemperature = require('./units/units_temperature');
const unitsVolume = require('./units/units_volume');
const validator = require('./validator/validator');
const loader = require('../src/loader');

const Promise = require('bluebird');
const _ = require('lodash');

module.exports = () => {
  const ratio = {units: {}};
  //Object.assign(ratio.units, unitsVolume, unitsTemperature);

  ratio.listTypes = () => new Promise((resolve) => {
    const list = {};
    _.forEach(_.keys(ratio.units), (key) => {
      list[ratio.units[key].type] = 0;
    });
    resolve(list);
  }).then((typeObject) => _.keys(typeObject));

  ratio.listAll = () => Promise.map(_.keys(ratio.units), (key) => {
    const result = {
      name: key,
      displayName: ratio.units[key].name,
      symbole: ratio.units[key].symbole,
      type: ratio.units[key].type
    };

    return result;
  });

  ratio.listByType = (type) => new Promise((resolve) => {
    const list = [];
    _.forEach(_.keys(ratio.units), (key) => {
      if (ratio.units[key].type === type) {
        list.push({
          name: key,
          displayName: ratio.units[key].name,
          symbole: ratio.units[key].symbole
        });
      }
    });
    resolve(list);
  });

  ratio.converte = (unitAndValueConverte, targetUnitConvert) => {
    const validate = (unitAndValue) => new Promise((resolve, reject) => {
      if (validator[ratio.units[unitAndValue.unit].type]) {
        try {
          validator[ratio.units[unitAndValue.unit].type](unitAndValue);
        } catch (error) {
          reject(error);
        }
      }
      resolve(unitAndValue);
    });

    const converteToBase = (unitAndValue) => new Promise((resolve, reject) => {
      if (ratio.units[unitAndValue.unit]) {
        resolve(ratio.units[unitAndValue.unit].conversion_formula(unitAndValue.value));
      }
      reject('Invalid temperature unit');
    });

    const convertToTarget = (baseUnit, targetUnit) => new Promise((resolve, reject) => {
      if (ratio.units[targetUnit]) {
        resolve(ratio.units[targetUnit].reverse_conversion(baseUnit));
      }
      reject('Invalid target temperature unit');
    });

    return validate(unitAndValueConverte)
      .then(converteToBase)
      .then((baseUnit) => convertToTarget(baseUnit, targetUnitConvert))
      .then((targetValue) => {
        const result = {value: targetValue, unit: targetUnitConvert};
        return result;
      });
  };

  ratio.add = (key, units) => {
    ratio.units[key] = units;
  };

  ratio.load = (location) => {
    console.log('called')
    return loader(location, ratio);
  };

  return ratio;
};
