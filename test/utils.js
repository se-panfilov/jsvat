var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');

module.exports = {
  check: function (arr, msg, isTrue, isDeepCheck) {
    arr.forEach(function (item) {
      return it(msg + ": " + item, function () {
        if (isTrue) {
          return expect(jsvat.checkVAT(item, isDeepCheck)).to.be.true;
        } else {
          return expect(jsvat.checkVAT(item, isDeepCheck)).to.be.flase;
        }
      });
    });
  }
};