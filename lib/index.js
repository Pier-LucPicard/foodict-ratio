'use strict';

const Ratio = require('./source/ratio');
const { register } = require('./units');

module.exports = (() => {
  const ratio = new Ratio();
  register(ratio);
  return ratio;
})();
