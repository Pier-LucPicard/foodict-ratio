var expect=require('chai').expect;
var weight=require('./../lib/weight');

describe('<Unit Test>',function(){

  describe('Weight',function(){

    it('the require should return an object',function(){
      return expect(weight).to.be.a('object');
    });

    it('should include a function named cup_to_weight',function(){
      return expect(weight.cup_to_weight).to.be.a('function');
    });

  });

});
