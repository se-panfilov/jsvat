"use strict";
var luxembourg = function (vat) {
  var expect = +vat.slice(6, 8);
  var checkDigit = +vat.slice(0, 6) % 89;
  // Checks the check digits of a Luxembourg VAT number.

  return checkDigit === expect;
};