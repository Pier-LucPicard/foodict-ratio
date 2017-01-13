'use strict';

const expect = require('chai').expect;
const loader = require('../src/loader');
const _ = require('lodash');

const R = require('../lib/ratio');
const ratio = R();

describe('Loader test', () => {

  it('should load the files', () => {

    return loader('lib/units',ratio).then((res) => {
      console.log(ratio);
    })
  });

});
