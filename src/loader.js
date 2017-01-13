'use strict';

const Promise = require('bluebird');
const glob = require('glob');
const _ = require('lodash');

const fs = Promise.promisifyAll(require('fs'));

module.exports = (location, ratios) => {

return new Promise((resolve,reject) => {

  return glob(location+'/*.js', {realpath:true}, function (er, files) {
    if(er){
      reject(er);
    }


    return Promise.map(files, (file)=> {
      let test = require(file);
      _.each(_.keys(test),(key) => {
        ratios.add(key,test[key])
      })
    }).then(() => {
      resolve(ratios)
    })
  })

})


}
