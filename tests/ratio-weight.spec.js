'use strict';

const test = require('ava');
const {expect} = require('chai');
const _ = require('lodash');

const Ratio=require('../lib/ratio');

const ratio = Ratio();


test('should create a full list of all the supported weight', t => {
  const list = ratio.listByType('weight');
  expect(list).to.be.an('array');
  expect(list.length).to.be.equal(5);
  t.pass();
})

test('Should correctly convert ounce', t => {
  let testRatio = {value:1,unit:'gram'};
  expect(ratio.converte(testRatio,'ounce').value).to.equal(0.03527396583786957);
  testRatio = {value:1,unit:'ounce'};
  expect(ratio.converte(testRatio,'gram').value).to.equal(28.34952);
  t.pass();
})

test('Should correctly convert pound', t => {
  let testRatio = {value:1,unit:'gram'};
  expect(ratio.converte(testRatio,'pound').value).to.equal(0.002204622621848776);
  testRatio = {value:1,unit:'pound'};
  expect(ratio.converte(testRatio,'gram').value).to.equal(453.59237);
  t.pass();
})

test('should randomly be converted in 100 different unit and still be the same number whit +- 1% of error', t => {
  const originalUnit = 'miligram';
  const originalValue = _.random(0,100,true);
  const testRatio = {value:originalValue,unit:originalUnit};
  

  function recursiveHelper(testRatio,index,list){
    if(index === 0){
      return ratio.converte(testRatio,originalUnit)
    }

    return recursiveHelper(ratio.converte(testRatio,list[_.random(list.length-1)]),index-1,list);

  }
    const nameList = _.map(ratio.listByType('weight'), 'name');

  const finalRatio = recursiveHelper(testRatio,100,nameList)
    expect(_.divide(finalRatio.value,testRatio.value) > 0.9 || _.divide(finalRatio.value,testRatio.value) < 1.1).to.be.true;


  t.pass();
});
