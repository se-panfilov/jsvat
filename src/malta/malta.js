"use strict";
var malta = function (vat, countryName) {
  var total = 0;
  var expect;
  
  // Extract the next digit and multiply by the counter.
  for (var i = 0; i < 6; i++) {
    total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
  }

  // Establish check digits by getting modulus 37.
  total = 37 - total % 37;

  // Compare it with the last character of the VAT number. If it's the same, then it's valid.
  expect = +vat.slice(6, 8);
  return total === expect;
};