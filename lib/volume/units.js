var millilitre = {
  name: 'Mililitre',
  symbole: 'ml',
  conversion_formula: function(millilitre){
    return millilitre;
  },
  reverse_conversion : function(millilitre){
    return millilitre;
  },
  type:'volume'
};

var us_legal_cup = {
  name:'U.S. Legal Cup',
  symbole:'U.S. legal cup',
  conversion_formula: function (cup){
    return cup * 240;
  },
  reverse_conversion: function (millilitre){
    return millilitre / 240;
  },
  type : 'volume'
};

var us_cup = {
  name: 'U.S. Cup',
  symbole: 'u.s. cup',
  conversion_formula: function (cup){
    return cup * 237;
  },
  reverse_conversion: function (millilitre){
    return millilitre / 237;
  },
  type : 'volume'
};

var metric_cup = {
  name: 'Metric Cup',
  symbole: 'metric cup',
  conversion_formula: function(cup){
    return cup * 250;
  },
  reverse_conversion: function(millilitre){
    return millilitre / 250;
  },
  type: 'volume'
};

var imperial_cup = {
  name: 'Imperial Cup',
  symbole: 'imp. cup',
  conversion_formula: function(cup){
    return cup * 284;
  },
  reverse_conversion: function(millilitre){
    return millilitre / 284;
  },
  type: 'volume'
};

var litre = {
  name: 'litre',
  symbole: 'L',
  conversion_formula: function(litre){
    return litre * 1000;
  },
  reverse_conversion: function(millilitre){
    return millilitre / 1000;
  },
  type:'volume'
};

var us_tablespoon = {
  name: 'U.S. Tablespoon',
  symbole: 'u.s. tbs',
  conversion_formula: function(tablespoon){
    return tablespoon * 14.7867648;
  },
  reverse_conversion: function(millilitre){
    return millilitre / 14.7867648;
  },
  type: 'volume'
};

var  imperial_tablespoon = {
  name: 'Imperial Tablespoon',
  symbole: 'imp. tbs',
  conversion_formula: function(tablespoon){
    return tablespoon * 17.758164;
  },
  reverse_conversion: function(millilitre){
    return millilitre / 17.758164;
  },
  type: 'volume'
};

var metric_tablespoon = {
  name: 'Metric Tablespoon',
  symbole: 'metric tbs',
  conversion_formula: function(tablespoon){
    return tablespoon * 15;
  },
  reverse_conversion: function(millilitre){
    return millilitre / 15;
  },
  type: 'volume'
};

var australia_tablespoon = {
  name: 'Australian Tablespoon',
  symbole: 'aust. tbs',
  conversion_formula: function(tablespoon){
    return tablespoon * 20;
  },
  reverse_conversion: function(millilitre){
    return millilitre / 20;
  },
  type: 'volume'
};

var metric_teaspoon = {
  name: 'Metric Teaspoon',
  symbole: 'metric ts',
  conversion_formula: function(teaspoon){
    return teaspoon * 5;
  },
  reverse_conversion: function(millilitre){
    return millilitre / 5;
  },
  type:'volume'
};

var us_teaspoon = {
  name: 'U.S. ts',
  symbole: 'u.s. ts',
  conversion_formula: function(teaspoon){
    return teaspoon * 4.928921598877499;
  },
  reverse_conversion: function(millilitre){
    return millilitre/ 4.928921598877499;
  },
  type: 'volume'
};

var imperial_teaspoon = {
  name: 'Imperial Teaspoon',
  symbole: 'imp. ts',
  conversion_formula: function(teaspoon){
    return teaspoon * 5.919388020822801;
  },
  reverse_conversion: function(millilitre){
    return millilitre / 5.919388020822801;
  },
  type: 'volume'
};

var decilitre = {
  name: 'Decilitre',
  symbole: 'dl',
  conversion_formula: function(decilitre){
    return decilitre * 100;
  },
  reverse_conversion: function(millilitre){
    return millilitre / 100;
  },
  type:'volume'
};

var centilitre = {
  name: 'Centilire',
  symbole: 'cl',
  conversion_formula: function(centilitre){
    return centilitre * 10;
  },
  reverse_conversion:function(centilitre){
    return centilitre / 10;
  },
  type:'volume'
};


module.exports = {
  litre:litre,
  millilitre:millilitre,
  us_legal_cup:us_legal_cup,
  us_cup:us_cup,
  metric_cup:metric_cup,
  centilitre:centilitre,
  decilitre:decilitre
}
