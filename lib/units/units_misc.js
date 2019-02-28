
const _ = require('lodash');

exports.element = {
  name: 'Element',
  symbole: 'unit(s)',
  conversion_formula: element => _.round(element, 0),
  reverse_conversion: element => _.round(element, 0),
  type: 'misc',
};

exports.number = {
  name: 'Number',
  symbole: 'number',
  conversion_formula: element => element,
  reverse_conversion: element => element,
  type: 'misc',
};
