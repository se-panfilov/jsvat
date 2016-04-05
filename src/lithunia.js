COUNTRIES.lithunia = {
  calcs: function (vat) {
    var total = 0;
    var expect;

    // 9 character VAT numbers are for legal persons
    if (vat.length === 9) {

      // 8th character must be one
      if (!(/^\d{7}1/).test(vat)) return false;

      // Extract the next digit and multiply by the counter+1.
      total = 0;
      for (var i = 0; i < 8; i++) {
        total += +vat.charAt(i) * (i + 1);
      }

      // Can have a double check digit calculation!
      if (total % 11 === 10) {
        total = 0;
        for (var j = 0; j < 8; j++) {
          total += +vat.charAt(j) * this.rules.multipliers.short[j];
        }
      }

      // Establish check digit.
      total = total % 11;
      if (total === 10) {
        total = 0;
      }

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(8, 9);
      return total === expect;
    }

    // 12 character VAT numbers are for temporarily registered taxpayers
    else {

      // 11th character must be one
      if (!(/^\d{10}1/).test(vat)) return false;

      // Extract the next digit and multiply by the counter+1.
      total = 0;
      for (var k = 0; k < 11; k++) {
        total += +vat.charAt(k) * this.rules.multipliers.med[k];
      }

      // Can have a double check digit calculation!
      if (total % 11 === 10) {
        total = 0;
        for (var l = 0; l < 11; l++) {
          total += +vat.charAt(l) * this.rules.multipliers.alt[l];
        }
      }

      // Establish check digit.
      total = total % 11;
      if (total === 10) {
        total = 0;
      }

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(11, 12);
      return total === expect;
    }
  },
  rules: {
    multipliers: {
      "short": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1
      ],
      "med": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1,
        2
      ],
      "alt": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1,
        2,
        3,
        4
      ]
    },
    regex: /^(LT)(\d{9}|\d{12})$/
  }
};