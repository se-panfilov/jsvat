'use strict';

var slovakia_republic = function (vat) {
  var expect = 0;
  var checkDigit = (vat % 11);
  // Checks the check digits of a Slovakian VAT number.
  // Check that the modulus of the whole VAT number is 0 - else error
  return checkDigit === expect;
};