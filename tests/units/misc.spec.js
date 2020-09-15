'use strict';

const test = require('ava');
const { expect } = require('chai');
const _ = require('lodash');

const ratio = require('../../lib');

test('should create a full list of all the supported misc', (t) => {
  const list = ratio.list('misc');
  expect(list).to.be.an('array');
  expect(list.length).to.be.equal(2);
  t.pass();
});

test('Should correctly convert element', (t) => {
  let testRatio = { value: 1.03527396583786957, unit: 'number' };
  expect(ratio.converte(testRatio.value, testRatio.unit, 'element').value).to.equal(1);
  testRatio = { value: 1, unit: 'element' };
  expect(ratio.converte(testRatio.value, testRatio.unit, 'number').value).to.equal(1);
  t.pass();
});
