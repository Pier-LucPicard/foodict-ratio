'use strict';

const { expect } = require('chai');
const test = require('ava');

const Validator = require('../../lib/source/validator');

test('Validator should be a constructor', (t) => {
  new Validator();
  t.pass();
});

test('validate should be a function on an instance of a validator and call the passed validate function', (t) => {
  const validator = new Validator('my name', (v, u) => {
    expect(v).to.be.equal(10);
    expect(u).to.be.equal('red');
  });
  expect(validator.name).to.be.equal('my name');
  validator.validate(10, 'red');
  t.pass();
});

test('validate should be a function on an instance of a validator', (t) => {
  const validator = new Validator();
  validator.validate();
  t.pass();
});
