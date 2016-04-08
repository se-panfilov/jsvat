var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');
var argv = require('minimist')(process.argv.slice(2));

var noVerbose = "noverbose";

module.exports = {
  check: function (arr, msg, isTrue) {
    arr.forEach(function (item) {

      var testMsg = (argv.config !== noVerbose) ? msg + ': ' + item : 'test';

      return it(testMsg, function () {
      //return it('c', function () {
        if (isTrue) {
          return expect(jsvat.checkVAT(item)).to.be.true;
        } else {
          return expect(jsvat.checkVAT(item)).to.be.false;
        }
      });
    });
  },
  detailedCheck: function (arr, msg, isTrue, countryName) {
    arr.forEach(function (item) {

      var testMsg = (argv.config !== noVerbose) ? msg + ': ' + item : 'test';

      return it(testMsg, function () {
        var result = jsvat.checkVAT(item, true);
        if (isTrue) {
          expect(result.isValid).to.be.true;
          expect(result.countries[0]).to.be.equal(countryName);
        } else {
          expect(result.isValid).to.be.false;
          expect(result.countries.length).to.be.equal(0);
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