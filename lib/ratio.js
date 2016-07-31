'use strict'
var tempConverter = require('./temperature/temperature');
var validator = require('./validator/validator');
var Promise = require('bluebird');
var ratio = {

};

ratio.converteTemperature = function (temperature,targetUnit) {

  return new Promise(function(resolve,reject){
    try{
       validator.temperatureValidator(temperature);
     }catch(error){
       reject(error);
     }
     resolve();
  }).then(()=>{
    return tempConverter.convert(temperature,targetUnit);
  });
};

ratio.listTemperature = function() {
  return tempConverter.list();
}
module.exports = function () {
  return ratio;
};
