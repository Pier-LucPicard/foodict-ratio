
const _ = require('lodash');

exports.celcius = {
  name: 'Celcius',
  symbole: '°C',
  conversion_formula: celcius => _.add(celcius, 273.15),
  reverse_conversion: kelvin => _.subtract(kelvin, 273.15),
  type: 'temperature'
};

exports.farenheit = {
  name: 'Farenheit',
  symbole: '°F',
  conversion_formula: farenheit => _.divide(_.multiply(_.add(farenheit, 459.67), 5), 9),
  reverse_conversion: kelvin => _.subtract(_.multiply(_.divide(9, 5), kelvin), 459.67),
  type: 'temperature'
};

exports.rankine = {
  name: 'Rankine',
  symbole: '°Ra',
  conversion_formula: rankine => _.multiply(rankine, _.divide(5, 9)),
  reverse_conversion: kelvin => _.multiply(kelvin, _.divide(9, 5)),
  type: 'temperature'
};

exports.romer = {
  name: 'Rømer',
  symbole: '°Rø',
  conversion_formula: romer => _.add(_.divide(_.multiply(_.subtract(romer, 7.5), 40), 21), 273.15),
  reverse_conversion: kelvin => _.add(_.divide(_.multiply(_.subtract(kelvin, 273.15), 21), 40), 7.5),
  type: 'temperature'
};

exports.newton = {
  name: 'Newton',
  symbole: '°N',
  conversion_formula: newton => _.add(_.divide(_.multiply(newton, 100), 33), 273.15),
  reverse_conversion: kelvin => _.divide(_.multiply(_.subtract(kelvin, 273.15), 33), 100),
  type: 'temperature'
};

exports.reaumur = {
  name: 'Réaumur',
  symbole: '°Ré',
  conversion_formula: reaumur => _.add(_.divide(_.multiply(reaumur, 5), 4), 273.15),
  reverse_conversion: kelvin => _.divide(_.multiply(_.subtract(kelvin, 273.15), 4), 5),
  type: 'temperature'
};

exports.delisle = {
  name: 'Delisle',
  symbole: '°D',
  conversion_formula: delisle => _.subtract(373.15, _.divide(_.multiply(delisle, 2), 3)),
  reverse_conversion: kelvin => _.divide(_.multiply(_.subtract(373.15, kelvin), 3), 2),
  type: 'temperature'
};

exports.kelvin = {
  name: 'Kelvin',
  symbole: 'K',
  conversion_formula: kelvin => kelvin,
  reverse_conversion: kelvin => kelvin,
  type: 'temperature'
};
