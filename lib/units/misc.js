const _ = require('lodash');

function register(ratio) {
  const miscUnits = [
    ratio.createUnit(
      'Element',
      'unit(s)',
      (element) => _.round(element, 0),
      (element) => _.round(element, 0),
      'misc',
    ),
    ratio.createUnit(
      'Number',
      'number',
      (element) => element,
      (element) => element,
      'misc',
    ),
  ];

  ratio.registerUnits(miscUnits);
}

module.exports = {
  register,
};
