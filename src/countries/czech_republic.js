COUNTRIES.czech_republic = {
  calcs: function (vat) {
    var total = 0;
    var expect;

    // Legal entities
    if (this.rules.additional[0].test(vat)) {

      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 7; i++) {
        total += +vat.charAt(i) * this.rules.multipliers[i];
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
    else if (this.rules.additional[2].test(vat)) {

      // Extract the next digit and multiply by the counter.
      for (var j = 0; j < 7; j++) {
        total += +vat.charAt(j + 1) * this.rules.multipliers[j];
      }

      // Establish check digit.
      total = 11 - total % 11;
      if (total === 10) total = 0;
      if (total === 11) total = 1;

      // Convert calculated check digit according to a lookup table;
      expect = +vat.slice(8, 9);
      return this.rules.lookup[total - 1] === expect;
    }

    // Individuals type 3
    else if (this.rules.additional[3].test(vat)) {
      var temp = +vat.slice(0, 2) + vat.slice(2, 4) + vat.slice(4, 6) + vat.slice(6, 8) + vat.slice(8);
      expect = +vat % 11 === 0;
      return !!(temp % 11 === 0 && expect);
    }

    // else error
    return false;
  },
  rules: {
    multipliers: [
      8,
      7,
      6,
      5,
      4,
      3,
      2
    ],
    "lookup": [
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1,
      0,
      9,
      10
    ],
    regex: /^(CZ)(\d{8,10})(\d{3})?$/,
    additional: [
      /^\d{8}$/,
      /^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/,
      /^6\d{8}$/,
      /^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/
    ]
  }
};