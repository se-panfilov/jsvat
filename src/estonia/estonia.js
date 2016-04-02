"use strict";

var estonia = function (vat, countryName) {
  var total = 0;
  var expect;
  
  // Extract the next digit and multiply by the counter.
  for (var i = 0; i < 8; i++) {
    total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
  }

  // Establish check digits using modulus 10.
  total = 10 - total % 10;
  if (total === 10) total = 0;

  // Compare it with the last character of the VAT number. If it's the same, then it's valid.
  expect = +vat.slice(8, 9);
  return total === expect;
};