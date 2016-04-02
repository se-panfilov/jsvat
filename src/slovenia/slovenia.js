"use strict";
var slovenia = function (vat, countryName) {
  var total = 0;
  var expect;
  
  // Extract the next digit and multiply by the counter.
  for (var i = 0; i < 7; i++) {
    total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
  }

  // Establish check digits using modulus 11
  total = 11 - total % 11;
  if (total === 10) {
    total = 0;
  }

  // Compare the number with the last character of the VAT number. If it is the
  // same, then it's a valid check digit.
  expect = +vat.slice(7, 8);
  return !!(total !== 11 && total === expect);
};