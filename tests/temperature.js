var expect=require('chai').expect;
var temperature=require('./../lib/temperature/temperature');

describe('<Unit test>',function(){

  describe('Temperature',function(){

    it('the require should return an object',function(){
      return expect(temperature).to.be.a('object');
    });

    it('should contain a function converte C to F',function(){
      return expect(temperature.celcius_to_farenheit).to.be.a('function');
    })

    it('should contain a function converte F to C',function(){
      return expect(temperature.farenheit_to_celcius).to.be.a('function');
    })

    it('should contain a function converte C to K',function(){
      return expect(temperature.celcius_to_kelvin).to.be.a('function');
    });

    it('should contain a function converte F to K',function(){
      return expect(temperature.farenheit_to_kelvin).to.be.a('function');
    });

    it('should contain a function converte K to F',function(){
      return expect(temperature.kelvin_to_farenheit).to.be.a('function');
    });

    it('should contain a function converte K to C',function(){
      return expect(temperature.kelvin_to_celcius).to.be.a('function');
    });

    describe('C to F',function(){

      it('should convert Celcius in Farenheit correctly',function(){
        expect(temperature.celcius_to_farenheit(0)).to.be.equal(32);
      });

    });

    describe('F to C',function(){

      it('should convert Celcius in Farenheit correctly',function(){
        expect(temperature.farenheit_to_celcius(32)).to.be.equal(0);
      });

    });

    describe('F to K',function(){

    });

  });

});
