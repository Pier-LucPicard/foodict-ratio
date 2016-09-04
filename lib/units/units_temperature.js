
exports.celcius = {
  name:'Celcius',
  symbole:'°C',
  conversion_formula: function (celcius){
    return celcius + 273.15;
  },
  reverse_conversion: function (kelvin){
    return kelvin - 273.15;
  },
  type : 'temperature'
};

exports.farenheit = {
  name:'Farenheit',
  symbole:'°F',
  conversion_formula: function (farenheit){
    return (farenheit + 459.67) * 5 / 9;
  },
  reverse_conversion: function (kelvin){
    return 9/5 *(kelvin - 273.15) + 32
  },
  type : 'temperature'
};

exports.rankine = {
  name:'Rankine',
  symbole:'°Ra',
  conversion_formula: function (rankine){
    return rankine / 1.8;
  },
  reverse_conversion: function (kelvin) {
    return kelvin * 1.8;
  },
  type : 'temperature'
};

exports.romer = {
  name:'Rømer',
  symbole:'°Rø',
  conversion_formula: function (romer) {
    return (romer - 7.5) * 40 / 21 + 273.15;
  },
  reverse_conversion:  function (kelvin) {
    return (kelvin - 273.15) * 21 / 40 + 7.5;
  },
  type : 'temperature'
};

exports.newton = {
  name:'Newton',
  symbole:'°N',
  conversion_formula: function(newton){
    return newton * 100 / 33 + 273.15;
  },
  reverse_conversion:  function (kelvin) {
    return (kelvin - 273.15) * 33 / 100;
  },
  type : 'temperature'
};

exports.reaumur = {
  name:'Réaumur',
  symbole:'°Ré',
  conversion_formula:  function (reaumur) {
    return reaumur * 5 / 4 + 273.15;
  },
  reverse_conversion:  function (kelvin) {
    return (kelvin - 273.15) * 4 / 5;
  },
  type : 'temperature'
};

exports.delisle = {
  name:'Delisle',
  symbole:'°D',
  conversion_formula:  function (delisle) {
    return 373.15 - (delisle * 2 / 3);
  },
  reverse_conversion:  function (kelvin) {
    return (373.15 - kelvin) * 3 / 2
  },
  type : 'temperature'
};


exports.kelvin = {
  name:'Kelvin',
  symbole:'K',
  conversion_formula: function (kelvin){
    return kelvin;
  },
  reverse_conversion: function (kelvin){
    return kelvin;
  },
  type : 'temperature'
};
