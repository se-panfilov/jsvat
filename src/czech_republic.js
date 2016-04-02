var czech_republic = function (vat, countryName) {
  var total = 0;

  // Legal entities
  if (CONDITIONS[countryName].additional[0].test(vat)) {

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
    }

    // Establish check digit.
    total = 11 - total % 11;
    if (total === 10) total = 0;
    if (total === 11) total = 1;

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(7, 8);
    return total === expect;
  }

  // Individuals type 2
  else if (CONDITIONS[countryName].additional[2].test(vat)) {

    // Extract the next digit and multiply by the counter.
    for (var j = 0; j < 7; j++) {
      total += +vat.charAt(j + 1) * CONDITIONS[countryName].multipliers[j];
    }

    // Establish check digit.
    total = 11 - total % 11;
    if (total === 10) total = 0;
    if (total === 11) total = 1;

    // Convert calculated check digit according to a lookup table;
    expect = +vat.slice(8, 9);
    return CONDITIONS[countryName].lookup[total - 1] === expect;
  }

  // Individuals type 3
  else if (CONDITIONS[countryName].additional[3].test(vat)) {
    var temp = +vat.slice(0, 2) + vat.slice(2, 4) + vat.slice(4, 6) + vat.slice(6, 8) + vat.slice(8);
    expect = +vat % 11 === 0;
    return !!(temp % 11 === 0 && expect);
  }

  // else error
  return false;
};