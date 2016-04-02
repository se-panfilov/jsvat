'use strict';

var spain = function (vat, countryName) {
  var i = 0;
  var total = 0;
  var temp;
  var expect;
  
  // National juridical entities
  if (CONDITIONS[countryName].additional[0].test(vat)) {

    // Extract the next digit and multiply by the counter.
    for (i = 0; i < 7; i++) {
      temp = vat.charAt(i + 1) * CONDITIONS[countryName].multipliers[i];
      if (temp > 9)
        total += Math.floor(temp / 10) + temp % 10;
      else
        total += temp;
    }
    // Now calculate the check digit itself.
    total = 10 - total % 10;
    if (total === 10) {
      total = 0;
    }

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(8, 9);
    return total === expect;
  }

  // Juridical entities other than national ones
  else if (CONDITIONS[countryName].additional[1].test(vat)) {

    // Extract the next digit and multiply by the counter.
    for (i = 0; i < 7; i++) {
      temp = vat.charAt(i + 1) * CONDITIONS[countryName].multipliers[i];
      if (temp > 9)
        total += Math.floor(temp / 10) + temp % 10;
      else
        total += temp;
    }

    // Now calculate the check digit itself.
    total = 10 - total % 10;
    total = String.fromCharCode(total + 64);

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = vat.slice(8, 9);
    return total === expect;
  }

  // Personal number (NIF) (starting with numeric of Y or Z)
  else if (CONDITIONS[countryName].additional[2].test(vat)) {
    var tempnumber = vat;
    if (tempnumber.substring(0, 1) === 'Y') tempnumber = tempnumber.replace(/Y/, '1');
    if (tempnumber.substring(0, 1) === 'Z') tempnumber = tempnumber.replace(/Z/, '2');
    expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempnumber.substring(0, 8) % 23);
    return tempnumber.charAt(8) === expect;
  }

  // Personal number (NIF) (starting with K, L, M, or X)
  else if (CONDITIONS[countryName].additional[3].test(vat)) {
    expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+vat.substring(1, 8) % 23);
    return vat.charAt(8) === expect;
  }

  else return false;
};