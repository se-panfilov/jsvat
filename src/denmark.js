"use strict";

var denmark = function (vat, countryName) {
  var total = 0;
  for (var i = 0; i < 8; i++) {
    total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
  }

  return total % 11 === 0;
};