"use strict";

var units= require('./units');
var _ = require('lodash');
var Promise = require('bluebird');

module.exports = {

  convert: function(temperature,target){
    return new Promise(function(resolve,reject){
      if(units[temperature.unit]){
        resolve(units[temperature.unit].conversion_formula(temperature.value));
      }
      reject('Invalid temperature unit');
    }).then(function(kelvinTemp){
      return new Promise(function(resolve,reject){
        if(units[target]){
          resolve(units[target].reverse_conversion(kelvinTemp));
        }
        reject('Invalid target temperature unit');
      })
    }).then(function(targetValue){
      return {value:targetValue,unit:target};
    })
  },

  list: function(){
    return Promise.map(_.keys(units),function(key){
      return {name : key, displayName: units[key].name, symbole: units[key].symbole}
    })
  }

};
