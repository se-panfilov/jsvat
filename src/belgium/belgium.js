'use strict';

var belgium = function (vat) {
  var expect;
  
  if (vat.length === 9) {
    vat = '0' + vat;
  }

  if (+vat.slice(1, 2) === 0) return false;

  var check = (97 - +vat.slice(0, 8) % 97);
  expect = +vat.slice(8, 10);
  return check === expect;
};