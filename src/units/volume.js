'use strict';

const _ = require('lodash');

function register(ratio) {
  const volumeUnits = [
    ratio.createUnit(
      'Mililitre',
      'ml',
      (millilitre) => millilitre,
      (millilitre) => millilitre,
      'volume',
    ),
    ratio.createUnit(
      'U.S. Legal Cup',
      'U.S. legal cup',
      (cup) => _.multiply(cup, 240),
      (millilitre) => _.divide(millilitre, 240),
      'volume',
    ),
    ratio.createUnit(
      'U.S. Cup',
      'u.s. cup',
      (cup) => _.multiply(cup, 237),
      (millilitre) => _.divide(millilitre, 237),
      'volume',
    ),
    ratio.createUnit(
      'Metric Cup',
      'metric cup',
      (cup) => _.multiply(cup, 250),
      (millilitre) => _.divide(millilitre, 250),
      'volume',
    ),
    ratio.createUnit(
      'Imperial Cup',
      'imp. cup',
      (cup) => _.multiply(cup, 284),
      (millilitre) => _.divide(millilitre, 284),
      'volume',
    ),
    ratio.createUnit(
      'Litre',
      'L',
      (litre) => _.multiply(litre, 1000),
      (millilitre) => _.divide(millilitre, 1000),
      'volume',
    ),
    ratio.createUnit(
      'U.S. Tablespoon',
      'u.s. tbs',
      (tablespoon) => _.multiply(tablespoon, 14.7867648),
      (millilitre) => _.divide(millilitre, 14.7867648),
      'volume',
    ),
    ratio.createUnit(
      'Imperial Tablespoon',
      'imp. tbs',
      (tablespoon) => _.multiply(tablespoon, 17.758164),
      (millilitre) => _.divide(millilitre, 17.758164),
      'volume',
    ),
    ratio.createUnit(
      'Metric Tablespoon',
      'metric tbs',
      (tablespoon) => _.multiply(tablespoon, 15),
      (millilitre) => _.divide(millilitre, 15),
      'volume',
    ),
    ratio.createUnit(
      'Australian Tablespoon',
      'aust. tbs',
      (tablespoon) => _.multiply(tablespoon, 20),
      (millilitre) => _.divide(millilitre, 20),
      'volume',
    ),
    ratio.createUnit(
      'Metric Teaspoon',
      'metric ts',
      (teaspoon) => _.multiply(teaspoon, 5),
      (millilitre) => _.divide(millilitre, 5),
      'volume',
    ),
    ratio.createUnit(
      'U.S. Teaspoon',
      'u.s. ts',
      (teaspoon) => _.multiply(teaspoon, 4.928921598877499),
      (millilitre) => _.divide(millilitre, 4.928921598877499),
      'volume',
    ),
    new ratio.Unit(
      'Imperial Teaspoon',
      'imp. ts',
      (teaspoon) => _.multiply(teaspoon, 5.919388020822801),
      (millilitre) => _.divide(millilitre, 5.919388020822801),
      'volume',
    ),
    new ratio.Unit(
      'U.S. Fluid Ounce',
      'u.s oz',
      (fluid_ounce) => _.multiply(fluid_ounce, 29.5735494174),
      (millilitre) => _.divide(millilitre, 29.5735494174),
      'volume',
    ),
    new ratio.Unit(
      'Imperial Fluid Ounce',
      'imp. oz',
      (imp_fluid_ounce) => _.multiply(imp_fluid_ounce, 28.4130461343),
      (millilitre) => _.divide(millilitre, 28.4130461343),
      'volume',
    ),
    new ratio.Unit(
      'U.S. Gallon',
      'imp. oz',
      (gallon) => _.multiply(gallon, 3785.411784),
      (millilitre) => _.divide(millilitre, 3785.411784),
      'volume',
    ),
    new ratio.Unit(
      'Decilitre',
      'dl',
      (decilitre) => decilitre * 100,
      (millilitre) => millilitre / 100,
      'volume',
    ),
    new ratio.Unit(
      'Centilire',
      'cl',
      (decilitre) => decilitre * 10,
      (millilitre) => millilitre / 10,
      'volume',
    ),
    new ratio.Unit(
      'Decalitre',
      'dal',
      (decalitre) => decalitre * 10000,
      (millilitre) => _.divide(millilitre, 10000),
      'volume',
    ),
    new ratio.Unit(
      'Hectolire',
      'hl',
      (hectolitre) => _.multiply(hectolitre, 100000),
      (millilitre) => _.divide(millilitre, 100000),
      'volume',
    ),
    new ratio.Unit(
      'Kilolitre',
      'kl',
      (kilolitre) => _.multiply(kilolitre, 1000000),
      (millilitre) => _.divide(millilitre, 1000000),
      'volume',
    ),
  ];

  const nonNegative = new ratio.Validator('Non-negative', (value, unit) => {
    if (value < 0) {
      throw new Error(`Invalid ${unit.type} value.  ${unit.name} can't have a negative value`);
    }
  });
  ratio.registerUnits(volumeUnits);
  ratio.registerUnitTypeValidator('volume', nonNegative);
}

module.exports = {
  register,
};
