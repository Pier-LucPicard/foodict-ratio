'use strict';

const { expect } = require('chai');
const test = require('ava');

const UnitType = require('../../src/source/unit_type');
const Unit = require('../../src/source/unit');
const Validator = require('../../src/source/validator');

test('UnitType should be a constructor', (t) => {
  new UnitType();
  t.pass();
});

test('It is possible to pass a name to UnitType constructor and use a getter', (t) => {
  const uType = new UnitType('mass');
  expect(uType.name).to.be.equal('mass');
  t.pass();
});

test('Should throw an error if the addUnit is passed something that is not of type Unit', (t) => {
  const uType = new UnitType('mass');
  try {
    uType.addUnit({});
  } catch (err) {
    expect(err.message).to.be.equal('Expect the parameter of the addUnit function to be of type Unit');
  }
  t.pass();
});

test('Should add a unit to itself when using addUnit and should be available using its unit key', (t) => {
  const uType = new UnitType('mass');
  const gram = new Unit(
    'Gram',
    'g',
    (g) => g,
    (g) => g,
    'mass',
  );
  const expectedKey = 'gram';

  uType.addUnit(gram);
  expect(uType[expectedKey]).to.be.equal(gram);
  t.pass();
});

test('Should throw an error if validate is not call with a unit as the second params', (t) => {
  const uType = new UnitType('mass');
  try {
    uType.validate(10, 'random');
  } catch (err) {
    expect(err.message).to.be.equal('Expect the parameter of the validate function to be of type Unit');
  }
  t.pass();
});

test('Should throw an error if the add a validator is not passed a validator', (t) => {
  const uType = new UnitType('mass');
  try {
    uType.addValidator(() => {});
  } catch (err) {
    expect(err.message).to.be.equal('Expect the parameter of the addValidator function to be of type Validator');
  }
  t.pass();
});
test('Should be able to add a validator function to a unit type', (t) => {
  const uType = new UnitType('mass');
  const validator = new Validator();

  expect(typeof uType.addValidator).to.be.equal('function');
  uType.addValidator(validator);

  t.pass();
});

test('Should be able to add a validator function to a unit type named', (t) => {
  const uType = new UnitType('mass');
  const validator = new Validator('empty');

  expect(typeof uType.addValidator).to.be.equal('function');
  uType.addValidator(validator);

  t.pass();
});

test('A validator can return an error when validate is call', (t) => {
  const uType = new UnitType('mass');
  const gram = new Unit(
    'Gram',
    'g',
    (g) => g,
    (g) => g,
    'mass',
  );
  const validator = new Validator('error', () => {
    throw new Error('test');
  });
  uType.addValidator(validator);
  try {
    uType.validate(10, gram);
    expect('should throw error').to.be.equal();
  } catch (err) {
    expect(err.message).to.be.equal('test');
  }

  t.pass();
});

test('A default validator should always be good', (t) => {
  const uType = new UnitType('mass');
  const gram = new Unit(
    'Gram',
    'g',
    (g) => g,
    (g) => g,
    'mass',
  );
  const validator = new Validator('empty');

  uType.addValidator(validator);

  uType.validate(10, gram);

  t.pass();
});

test('A validator can be fine when all is there', (t) => {
  const uType = new UnitType('mass');
  const gram = new Unit(
    'Gram',
    'g',
    (g) => g,
    (g) => g,
    'mass',
  );
  const validator = new Validator('props', (v, u) => {
    expect(v).to.be.equal(10);
    expect(u).to.be.equal(gram);
  });

  uType.addValidator(validator);

  uType.validate(10, gram);

  t.pass();
});

test('The list function should return an empty array if no unit added', (t) => {
  const uType = new UnitType('mass');
  const result = uType.list();
  expect(result instanceof Array).to.be.equal(true);
  expect(result.length).to.be.equal(0);

  t.pass();
});

test('The list function should return an array if unit added', (t) => {
  const uType = new UnitType('mass');
  const gram = new Unit(
    'Gram',
    'g',
    (g) => g,
    (g) => g,
    'mass',
  );
  const miligram = new Unit(
    'Mili Gram',
    'mg',
    (g) => g * 1000,
    (g) => g / 1000,
    'mass',
  );

  uType.addUnit(gram);
  uType.addUnit(miligram);
  const result = uType.list();
  expect(result instanceof Array).to.be.equal(true);
  expect(result.length).to.be.equal(2);
  expect(result[0].key).to.be.equal(gram.key);
  expect(result[1].key).to.be.equal(miligram.key);

  t.pass();
});

test('The list function should return an array if unit added and not includes none unit key', (t) => {
  const uType = new UnitType('mass');
  uType.candy = 'random';
  const gram = new Unit(
    'Gram',
    'g',
    (g) => g,
    (g) => g,
    'mass',
  );
  const miligram = new Unit(
    'Mili Gram',
    'mg',
    (g) => g * 1000,
    (g) => g / 1000,
    'mass',
  );

  uType.addUnit(gram);
  uType.addUnit(miligram);
  const result = uType.list();
  expect(result instanceof Array).to.be.equal(true);
  expect(result.length).to.be.equal(2);
  expect(result[0].key).to.be.equal(gram.key);
  expect(result[1].key).to.be.equal(miligram.key);

  t.pass();
});
