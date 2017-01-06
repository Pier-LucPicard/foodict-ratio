'use strict';

exports.celcius = {
  name: 'Celcius',
  symbole: '°C',
  conversion_formula: (celcius) => celcius + 273.15,
  reverse_conversion: (kelvin) => kelvin - 273.15,
  type: 'temperature'
};

exports.farenheit = {
  name: 'Farenheit',
  symbole: '°F',
  conversion_formula: (farenheit) => (farenheit + 459.67) * 5 / 9,
  reverse_conversion: (kelvin) => 9 / 5 * kelvin - 459.67,
  type: 'temperature'
};

exports.rankine = {
  name: 'Rankine',
  symbole: '°Ra',
  conversion_formula: (rankine) => rankine / (9 / 5),
  reverse_conversion: (kelvin) => kelvin * 9 / 5,
  type: 'temperature'
};

exports.romer = {
  name: 'Rømer',
  symbole: '°Rø',
  conversion_formula: (romer) => (romer - 7.5) * 40 / 21 + 273.15,
  reverse_conversion: (kelvin) => (kelvin - 273.15) * 21 / 40 + 7.5,
  type: 'temperature'
};

exports.newton = {
  name: 'Newton',
  symbole: '°N',
  conversion_formula: (newton) => newton * 100 / 33 + 273.15,
  reverse_conversion: (kelvin) => (kelvin - 273.15) * 33 / 100,
  type: 'temperature'
};

exports.reaumur = {
  name: 'Réaumur',
  symbole: '°Ré',
  conversion_formula: (reaumur) => reaumur * 5 / 4 + 273.15,
  reverse_conversion: (kelvin) => (kelvin - 273.15) * 4 / 5,
  type: 'temperature'
};

exports.delisle = {
  name: 'Delisle',
  symbole: '°D',
  conversion_formula: (delisle) => 373.15 - (delisle * 2 / 3),
  reverse_conversion: (kelvin) => (373.15 - kelvin) * 3 / 2,
  type: 'temperature'
};

exports.kelvin = {
  name: 'Kelvin',
  symbole: 'K',
  conversion_formula: (kelvin) => kelvin,
  reverse_conversion: (kelvin) => kelvin,
  type: 'temperature'
};
