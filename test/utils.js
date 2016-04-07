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
  },
  addCharsToVals: function (arr, char) {
    return arr.map(function (item) {
      var val = item.split('');
      val.splice(3, 0, char);
      val.splice(7, 0, char);
      return val.join('');
    });
  }
};