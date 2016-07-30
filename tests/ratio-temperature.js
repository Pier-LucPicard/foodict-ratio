var expect=require('chai').expect;
var Ratio=require('./../lib/ratio');

var ratio = new Ratio();

describe('Ratio Temperature',function(){

  it('should converte celcius do kelvin',function(){
    expect(ratio.converteTemperature({value:0,unit:"celcius"},'kelvin')).to.be.deep.equal({value:273.15,unit:'kelvin'});
  });

  it('should throw the correct error if the value is below absolute 0 in kelvin',function(){
    expect(ratio.converteTemperature({value:-10,unit:"kelvin"},'celcius')).to.be.a('Error');
    expect(ratio.converteTemperature({value:-10,unit:"kelvin"},'celcius').message).to.be.equal('Invalide temperature value');
  })
});
