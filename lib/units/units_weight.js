
const _ = require('lodash');

exports.gram = {
  name: 'Gram',
  symbole: 'g',
  conversion_formula: gram => gram,
  reverse_conversion: gram => gram,
  type: 'weight'
};

exports.pound = {
  name: 'Pound',
  symbole: 'lb',
  conversion_formula: gram => _.multiply(gram, 453.59237),
  reverse_conversion: pound => _.divide(pound, 453.59237),
  type: 'weight'
};

exports.kilogram = {
  name: 'Kilogram',
  symbole: 'kg',
  conversion_formula: gram => _.multiply(gram, 1000),
  reverse_conversion: kilo => _.divide(kilo, 1000),
  type: 'weight'
};

exports.ounce = {
  name: 'Ounce',
  symbole: 'oz',
  conversion_formula: gram => _.multiply(gram, 28.34952),
  reverse_conversion: oz => _.divide(oz, 28.34952),
  type: 'weight'
};

exports.miligram = {
  name: 'Miligram',
  symbole: 'mg',
  conversion_formula: gram => _.divide(gram, 1000),
  reverse_conversion: miligram => _.multiply(miligram, 1000),
  type: 'weight'
};
