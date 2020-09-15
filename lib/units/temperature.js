const _ = require('lodash');

function register(ratio) {
  const temperatureUnits = [
    ratio.createUnit(
      'Celcius',
      '°C',
      (celcius) => _.add(celcius, 273.15),
      (kelvin) => _.subtract(kelvin, 273.15),
      'temperature',
    ),
    ratio.createUnit(
      'Farenheit',
      '°F',
      (farenheit) => _.divide(_.multiply(_.add(farenheit, 459.67), 5), 9),
      (kelvin) => _.subtract(_.multiply(_.divide(9, 5), kelvin), 459.67),
      'temperature',
    ),

    ratio.createUnit(
      'Rankine',
      '°Ra',
      (rankine) => _.multiply(rankine, _.divide(5, 9)),
      (kelvin) => _.multiply(kelvin, _.divide(9, 5)),
      'temperature',
    ),

    ratio.createUnit(
      'Rømer',
      '°Rø',
      (romer) => _.add(_.divide(_.multiply(_.subtract(romer, 7.5), 40), 21), 273.15),
      (kelvin) => _.add(_.divide(_.multiply(_.subtract(kelvin, 273.15), 21), 40), 7.5),
      'temperature',
    ),

    ratio.createUnit(
      'Newton',
      '°N',
      (newton) => _.add(_.divide(_.multiply(newton, 100), 33), 273.15),
      (kelvin) => _.divide(_.multiply(_.subtract(kelvin, 273.15), 33), 100),
      'temperature',
    ),

    ratio.createUnit(
      'Réaumur',
      '°Ré',
      (reaumur) => _.add(_.divide(_.multiply(reaumur, 5), 4), 273.15),
      (kelvin) => _.divide(_.multiply(_.subtract(kelvin, 273.15), 4), 5),
      'temperature',
    ),

    ratio.createUnit(
      'Delisle',
      '°D',
      (delisle) => _.subtract(373.15, _.divide(_.multiply(delisle, 2), 3)),
      (kelvin) => _.divide(_.multiply(_.subtract(373.15, kelvin), 3), 2),
      'temperature',
    ),

    ratio.createUnit(
      'Kelvin',
      'K',
      (kelvin) => kelvin,
      (kelvin) => kelvin,
      'temperature',
    ),
  ];

  const absoluteZero = ratio.createValidator('Absolute Zero', (value, unit) => {
    const invalideValue = (min, max) => {
      if (!!min && value < min) {
        const message = `Invalide temperature value ${value} ${unit.symbole}.  It can't be below ${min} ${unit.symbole}, the value of absolute zero.`;
        throw new Error(message);
      }

      if (!!max && value > max) {
        const message = `Invalide temperature value ${value} ${unit.symbole}.  It can't be above ${min} ${unit.symbole}, the value of absolute zero.`;
        throw new Error(message);
      }
    };

    if (!_.isNumber(value)) {
      throw new Error('Invalide temperature value');
    }

    switch (unit.key) {
      case 'kelvin':
        invalideValue(0);
        break;

      case 'celcius':
        invalideValue(-273.15);
        break;

      case 'farenheit':
        invalideValue(-459.67);
        break;

      case 'rankine':
        invalideValue(0);
        break;

      case 'delisle':
        invalideValue(undefined, 559.725);
        break;

      case 'newton':
        invalideValue(-90.14);
        break;

      case 'reaumur':
        invalideValue(-218.52);
        break;

      case 'romer':
        invalideValue(-135.9);
        break;

      default:
        throw new Error('This unit is not supported');
    }
  });
  ratio.registerUnits(temperatureUnits);
  ratio.registerUnitTypeValidator('temperature', absoluteZero);
}

module.exports = {
  register,
};
