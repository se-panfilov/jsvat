var expect = require('chai').expect;
var jsvat = require('../dist/jsvat.js');
var argv = require('minimist')(process.argv.slice(2));

var noVerbose = "noverbose";

module.exports = {
  check: function (arr, msg, isTrue, countryName) {
    arr.forEach(function (item) {

      var testMsg = (argv.config !== noVerbose) ? msg + ': ' + item : 'test';

      return it(testMsg, function () {
        var result = jsvat.checkVAT(item);
        if (isTrue) {
          expect(result.value).to.be.equal(item.toString().toUpperCase().replace(/(\s|-|\.)+/g, ''));
          expect(result.isValid).to.be.true;
          console.log(result.country);
          console.log(countryName);
          expect(result.country).to.be.equal(countryName);
        } else {
          expect(result.value).to.be.equal(item.toString().toUpperCase().replace(/(\s|-|\.)+/g, ''));
          expect(result.isValid).to.be.false;
          expect(result.country).to.be.null;
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