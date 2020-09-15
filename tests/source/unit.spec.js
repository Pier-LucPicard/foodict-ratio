'use strict';

const { expect } = require('chai');
const test = require('ava');

const Unit = require('../../lib/source/unit');

test('Unit should be a constructor', (t) => {
  new Unit();
  t.pass();
});

test('generateKey should be a static method on unit', (t) => {
  expect(typeof Unit.generateKey).to.be.a.equal('function');
  expect(Unit.generateKey('U.S. Legal Cup')).to.be.equal('u_s_legal_cup');
  t.pass();
});

test('converteToBase should be a function that calls conversion_formula with the first argument', (t) => {
  let called = false;
  const unit = new Unit(
    'Imperial Teaspoon',
    'imp. ts',
    (teaspoon) => {
      called = true;
      expect(teaspoon).to.be.equal(101);
      return 10;
    },
    (millilitre) => _.divide(millilitre, 5.919388020822801),
    'volume',
  );

  expect(unit.converteToBase(101)).to.be.equal(10);
  expect(called).to.be.equal(true);
  t.pass();
});

test('converteFromBase should be a function that calls reverse_conversion with the first argument', (t) => {
  let called = false;
  const unit = new Unit(
    'Imperial Teaspoon',
    'imp. ts',
    (millilitre) => _.divide(millilitre, 5.919388020822801),
    (teaspoon) => {
      called = true;
      expect(teaspoon).to.be.equal(101);
      return 10;
    },
    'volume',
  );

  expect(unit.converteFromBase(101)).to.be.equal(10);
  expect(called).to.be.equal(true);
  t.pass();
});

test('format should be a method on a unit instance', (t) => {
  const unit = new Unit(
    'Imperial Teaspoon',
    'imp. ts',
    (teaspoon) => _.multiply(teaspoon, 5.919388020822801),
    (millilitre) => _.divide(millilitre, 5.919388020822801),
    'volume',
  );
  expect(typeof unit.format).to.be.equal('function');
  expect(unit.format()).to.be.deep.equal({
    key: 'imperial_teaspoon',
    name: 'Imperial Teaspoon',
    symbole: 'imp. ts',
    type: 'volume',
  });
  t.pass();
});
