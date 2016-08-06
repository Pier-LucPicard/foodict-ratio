"use strict";

var units= require('./units');
var _ = require('lodash');
var Promise = require('bluebird');

module.exports = {

  convert: function(volume,target){
    return new Promise(function(resolve,reject){
      if(units[volume.unit]){
        resolve(units[volume.unit].conversion_formula(volume.value));
      }
      reject('Invalid temperature unit');
    }).then(function(millilitreVolume){
      return new Promise(function(resolve,reject){
        if(units[target]){
          resolve(units[target].reverse_conversion(millilitreVolume));
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
