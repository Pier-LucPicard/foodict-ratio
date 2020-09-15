const _ = require('lodash');

function register(ratio) {
  const massUnits = [
    ratio.createUnit(
      'Gram',
      'g',
      (gram) => gram,
      (gram) => gram,
      'mass',
    ),

    ratio.createUnit(
      'Pound',
      'lb',
      (gram) => _.multiply(gram, 453.59237),
      (pound) => _.divide(pound, 453.59237),
      'mass',
    ),

    ratio.createUnit(
      'Kilogram',
      'kg',
      (gram) => _.multiply(gram, 1000),
      (kilo) => _.divide(kilo, 1000),
      'mass',
    ),

    ratio.createUnit(
      'Ounce',
      'oz',
      (gram) => _.multiply(gram, 28.34952),
      (oz) => _.divide(oz, 28.34952),
      'mass',
    ),

    ratio.createUnit(
      'Miligram',
      'mg',
      (gram) => _.divide(gram, 1000),
      (miligram) => _.multiply(miligram, 1000),
      'mass',
    ),
  ];

  const nonNegative = new ratio.Validator('Non-negative', (value, unit) => {
    if (value < 0) {
      throw new Error(`Invalid ${unit.type} value.  ${unit.name} can't have a negative value`);
    }
  });
  ratio.registerUnits(massUnits);
  ratio.registerUnitTypeValidator('volume', nonNegative);
}

module.exports = {
  register,
};
