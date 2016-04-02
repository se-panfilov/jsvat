"use strict";

var finland = function (vat, countryName) {
  var total = 0;
  // Extract the next digit and multiply by the counter.
  for (var i = 0; i < 7; i++) total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];

  // Establish check digit.
  total = 11 - total % 11;
  if (total > 9) {
    total = 0;
  }

  // Compare it with the last character of the VAT number. If it's the same, then it's valid.
  expect = +vat.slice(7, 8);
  return total === expect;
};