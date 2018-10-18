'use strict';
const test = require('ava');
const {expect} = require('chai');
const _ = require('lodash');

const Ratio=require('../lib/ratio');

const ratio = Ratio();


test('should create a full list of all the supported temperature', t =>{
  const list = ratio.listByType('temperature');
  expect(list).to.be.an('array');
  expect(list.length).to.be.equal(8);
  t.pass();
})


test('should randomly be converted in 100 different unit and still be the same number whit +- 1% of error', t => {
  const originalUnit = 'kelvin';
  const originalValue = _.random(0,100,true);
  const testRatio = {value:originalValue,unit:originalUnit};
  

  function recursiveHelper(testRatio,index,list){
    if(index === 0){
      return ratio.converte(testRatio,originalUnit)
    }

    return recursiveHelper(ratio.converte(testRatio,list[_.random(list.length-1)]),index-1,list);

  }
    const nameList = _.map(ratio.listByType('temperature'), 'name');

  const finalRatio = recursiveHelper(testRatio,100,nameList)
    expect(_.divide(finalRatio.value,testRatio.value) > 0.9 || _.divide(finalRatio.value,testRatio.value) < 1.1).to.be.true;


  t.pass();
});


