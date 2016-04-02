"use strict";

var russia = function (vat, countryName) {
  var total = 0;
  var expect;
  var expect2;

  // Checks the check digits of a Russian INN number
  // See http://russianpartner.biz/test_inn.html for algorithm

  // 10 digit INN numbers
  if (vat.length === 10) {

    for (var i = 0; i < 10; i++) {
      total += +vat.charAt(i) * CONDITIONS[countryName].multipliers.m_1[i];
    }

    total = total % 11;
    if (total > 9) {
      total = total % 10;
    }

    // Compare it with the last character of the VAT number. If it is the same, then it's valid
    expect = +vat.slice(9, 10);
    return total === expect;

    // 12 digit INN numbers
  } else if (vat.length === 12) {
    var total1 = 0;
    var total2 = 0;

    for (var j = 0; j < 11; j++) {
      total1 += +vat.charAt(j) * CONDITIONS[countryName].multipliers.m_2[j];
    }

    total1 = total1 % 11;
    if (total1 > 9) {
      total1 = total1 % 10;
    }

    for (var k = 0; k < 11; k++) {
      total2 += +vat.charAt(k) * CONDITIONS[countryName].multipliers.m_3[k];
    }

    total2 = total2 % 11;
    if (total2 > 9) {
      total2 = total2 % 10;
    }

    // Compare the first check with the 11th character and the second check with the 12th and last
    // character of the VAT number. If they're both the same, then it's valid
    //expect = +vat.slice(10, 11);
    expect = (total1 === +vat.slice(10, 11));
    //expect2 = +vat.slice(11, 12);
    expect2 = (total2 === +vat.slice(11, 12));
    return (expect) && (expect2);
  }
};