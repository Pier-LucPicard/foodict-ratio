var tempConverter = require('./temperature/temperature');
var validator = require('./validator/validator');

var ratio = {

};

ratio.converteTemperature = function (temperature,targetUnit) {
  if(tempConverter[temperature.unit+"_to_"+targetUnit]){
    try{
      validator.temperatureValidator(temperature);
    }catch(error){
      return error;
    }
    var newValue=tempConverter[temperature.unit+"_to_"+targetUnit](temperature.value);
    return {value:newValue,unit:targetUnit};
  }
  consle.log('The unit : "'+ targetUnit +'" is invalid or unsupported');
  return temp;
};

module.exports = function () {
  return ratio;
};
