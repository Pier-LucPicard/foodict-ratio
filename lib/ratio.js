'use strict'
var tempConverter = require('./temperature/temperature');
var volumeConverter = require('./volume/volume');
var validator = require('./validator/validator');
var Promise = require('bluebird');
var ratio = {};

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

ratio.convertVolume = function(volume,targetUnit){
  return new Promise(function(resolve,reject){
     resolve();
  }).then(()=>{
    return volumeConverter.convert(volume,targetUnit);
  });
}

ratio.listVolume= function() {
  retrun volumeConverter.list();
}

ratio.listTemperature = function() {
  return tempConverter.list();
}
module.exports = function () {
  return ratio;
};
