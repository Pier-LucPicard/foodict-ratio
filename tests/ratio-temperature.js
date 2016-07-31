var expect=require('chai').expect;
var Ratio=require('./../lib/ratio');

var ratio = new Ratio();

describe('Ratio Temperature',function(){

  it('should converte celcius to kelvin',function(){
    return ratio.converteTemperature({value:0,unit:"celcius"},'kelvin').then(function(result){
      expect(result).to.be.deep.equal({value:273.15,unit:'kelvin'});
    });
  });

  it('should convert celcius to farenheit',function(){
    return ratio.converteTemperature({value:33,unit:"celcius"},'farenheit').then(function(result){
      expect(result).to.be.deep.equal({value:91.4,unit:'farenheit'});
    });
  });

  it('should throw the correct error if the value is below absolute 0 in kelvin',function(){
    ratio.converteTemperature({value:-10,unit:"kelvin"},'celcius').catch(function(error){
      expect(error).to.be.a('Error');
      expect((error).message).to.be.equal('Invalide temperature value');
    });
  });

  it('should create a full list of all the supported temperature',function(){
    return ratio.listTemperature().then((list)=>{
      expect(list).to.be.deep.equal([
        { name: 'celcius', displayName: 'Celcius', symbole: '°C' },
        { name: 'farenheit', displayName: 'Farenheit', symbole: '°F' },
        { name: 'romer', displayName: 'Rømer', symbole: '°Rø' },
        { name: 'rankine', displayName: 'Rankine', symbole: '°Ra' },
        { name: 'newton', displayName: 'Newton', symbole: '°N' },
        { name: 'reaumur', displayName: 'Réaumur', symbole: '°Ré' },
        { name: 'delisle', displayName: 'Delisle', symbole: '°D' },
        { name: 'kelvin', displayName: 'Kelvin', symbole: 'K' }
      ]);
    })
  })

});
