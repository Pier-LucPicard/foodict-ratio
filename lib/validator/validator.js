'use stric';

const _ = require('lodash');

const invalideValue = (value, unit) => {
  const message = `Invalide temperature value ${value} ${unit}`;
  return new Error(message);
};

exports.temperature = (temperature) => {
  if (!_.isNumber(temperature.value)) {
    throw new Error('Invalide temperature value');
  }

  switch (temperature.unit) {
    case 'kelvin' :
      if (temperature.value < 0) {
        throw invalideValue(temperature.value, temperature.unit);
      }
      return temperature;

    case 'celcius' :
      if (temperature.value < -273.150) {
        throw invalideValue(temperature.value, temperature.unit);
      }
      return temperature;

    case 'farenheit' :
      if (temperature.value < -459.67) {
        throw invalideValue(temperature.value, temperature.unit);
      }
      return temperature;

    case 'rankine':
      if (temperature.value < 0) {
        throw invalideValue(temperature.value, temperature.unit);
      }
      return temperature;

    case 'delisle':
      if (temperature.value > 559.725) {
        throw invalideValue(temperature.value, temperature.unit);
      }
      return temperature;

    case 'newton':
      if (temperature.value < -90.14) {
        throw invalideValue(temperature.value, temperature.unit);
      }
      return temperature;

    case 'reaumur':
      if (temperature.value < -218.52) {
        throw invalideValue(temperature.value, temperature.unit);
      }
      return temperature;

    case 'romer':
      if (temperature.value < -135.90) {
        throw invalideValue(temperature.value, temperature.unit);
      }
      return temperature;

    default:
      throw new Error('This unit is not supported');
  }
};
