'use strict';
const test = require('ava');
const expect = require('chai').expect;
const _ = require('lodash');

const index = require('../index');

test('Should return a function', t => {

  expect(index).to.be.a('function');
  t.pass();
});

test('Should export some specific public interface and they are all function', t => {

  const publicInterface = index();
  expect(_.keys(publicInterface)).to.be.deep.equal(['listTypes', 'listAll', 'listByType','find', 'converte', 'add']);
  _.each(publicInterface, (interfaceFunction) => expect(interfaceFunction).to.be.a('function'));
  t.pass();
});

test('The listAll function should not be empty and the element should be well formatted', t => {

  const publicInterface = index();
  expect(publicInterface.listAll().length).to.be.not.equal(0);
  _.each(publicInterface.listAll(), (ratio) => {
    expect(ratio.name).to.exist;
    expect(ratio.type).to.exist;
    expect(ratio.symbole).to.exist;
    expect(ratio.displayName).to.exist;
  })

  t.pass();
});

test('The listType should list all the different unit type that are loaded', t => {

  const publicInterface = index();
  expect(publicInterface.listTypes().length).to.be.not.equal(0);
  expect(publicInterface.listTypes()).to.be.deep.equal(['volume','temperature','weight']);

  t.pass();
});

test('The listByType should return an empty array if the unit type is not good', t => {

  const publicInterface = index();
  expect(publicInterface.listByType('random').length).to.be.equal(0);
  expect(publicInterface.listByType('random')).to.be.deep.equal([]);
  t.pass();
});