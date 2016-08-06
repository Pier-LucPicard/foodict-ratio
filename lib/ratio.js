'use strict'
var units_temperature = require('./units/units_temperature');
var units_volume = require('./units/units_volume');
var validator = require('./validator/validator');
var Promise = require('bluebird');

module.exports = function () {
  var ratio = {units:{}};
  Object.assign(ratio.units,units_volume,units_temperature);

  ratio.listTypes = function(){
    return new Promise(function(resolve){
      var list={};
      _.forEach(_.keys(ratio.units),function(key){
        list[ratio.units[key].type]=0;
      })
      resolve(list);
    }).then(function(typeObject){
      return _.keys(typeObject);
    })
  };

  ratio.listAll = function(){
    return Promise.map(_.keys(ratio.units),(key)=>{
      return {name : key, displayName: ratio.units[key].name, symbole:ratio.units[key].symbole, type: ratio.units[key].type};
    })
  };

  ratio.listByType = function(type){
    return new Promise(function(resolve){
      var list=[];
      _.forEach(_.keys(ratio.units),function(key){
        if(ratio.units[key].type == type){
          list.push({name : key, displayName: ratio.units[key].name, symbole:ratio.units[key].symbole});
        }
      })
      resolve(list);
    });
  };

  ratio.converte = function (unitAndValue,targetUnit) {

    var validate = function(unitAndValue){
      return new Promise(function(resolve,reject){
        if(validator[ratio.units[unitAndValue.unit].type]){
          try{
             validator[ratio.units[unitAndValue.unit].type](unitAndValue);
           }catch(error){
             reject(error);
           }
        }
         resolve(unitAndValue);
      })
    }

    var converteToBase = function(unitAndValue){
      return new Promise(function(resolve,reject){
        if(ratio.units[unitAndValue.unit]){
          resolve(ratio.units[unitAndValue.unit].conversion_formula(unitAndValue.value));
        }
        reject('Invalid temperature unit');
      });
    };

    var convertToTarget=function(baseUnit,targetUnit){
      return new Promise(function(resolve,reject){
        if(ratio.units[targetUnit]){
          resolve(ratio.units[targetUnit].reverse_conversion(baseUnit));
        }
        reject('Invalid target temperature unit');
      })
    };

    return validate(unitAndValue).then(converteToBase).then(function(baseUnit){
        return convertToTarget(baseUnit,targetUnit);
      }).then(function(targetValue){
        return {value:targetValue,unit:targetUnit};
      })
  };

  return ratio;
};
