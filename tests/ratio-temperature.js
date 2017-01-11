var expect=require('chai').expect;
var Ratio=require('./../lib/ratio');
var _ = require('lodash');

var ratio = Ratio();

describe('Ratio Temperature',function(){

  before(() => {
    return ratio.load('lib/units');
  })

    it('should create a full list of all the supported temperature',function(){
      return ratio.listByType('temperature').then((list) => {
        expect(list).to.be.an('array');
        expect(list.length).to.be.equal(8);
      })
    });

    it('should randomly be converted in 100 different unit and still be the same number whit +- 1% of error', function () {

      var originalUnit = 'kelvin';
      var originalValue = _.random(0,100,true);
      var recursiveHelper = function(testRatio,index,list){
        if(index === 0){
          return ratio.converte(testRatio,originalUnit)
        }
        return ratio.converte(testRatio,list[_.random(list.length-1)]).then((interRation)=>{
          return recursiveHelper(interRation,index-1,list);
        })
      }

      return ratio.listByType('temperature')
      .then((list) => {
        return _.map(list,'name');
      })
      .then((list)=>{

        var testRatio = {value:originalValue,unit:originalUnit};
        return recursiveHelper(testRatio,100,list).then((finalRatio)=>{
          expect(_.divide(finalRatio.value,testRatio.value) > 0.9 || _.divide(finalRatio.value,testRatio.value) < 1.1).to.be.true;
        })

      });



    });

});
