'use strict';

var switzerland = function (vat, countryName) {
  var total = 0;
  for (var i = 0; i < 8; i++) {
    total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
  }

  // Establish check digit.
  total = 11 - total % 11;
  if (total === 10) return false;
  if (total === 11) total = 0;

  // Check to see if the check digit given is correct, If not, we have an error with the VAT number
  expect = +vat.substr(8, 1);
  return total === expect;
};