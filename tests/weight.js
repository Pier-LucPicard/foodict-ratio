var expect=require('chai').expect;
var weight=require('./../lib/weight');

describe('<Unit Test>',function(){

  describe('Weight',function(){

    it('the require should return an object',function(){
      return expect(weight).to.be.a('object');
    });

  });

});
