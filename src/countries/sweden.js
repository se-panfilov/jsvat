// eslint-disable-next-line no-undef
exports.countries.sweden = {
  name: 'Sweden',
  codes: ['SE', 'SWE', '752'],
  calcFn: function (vat) {
    var expect

    // Calculate R where R = R1 + R3 + R5 + R7 + R9, and Ri = INT(Ci/5) + (Ci*2) modulo 10
    var R = 0
    var digit
    for (var i = 0; i < 9; i = i + 2) {
      digit = +vat.charAt(i)
      R += Math.floor(digit / 5) + ((digit * 2) % 10)
    }

    // Calculate S where S = C2 + C4 + C6 + C8
    var S = 0
    for (var j = 1; j < 9; j = j + 2) {
      S += +vat.charAt(j)
    }

    var checkDigit = (10 - (R + S) % 10) % 10

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(9, 10)

    return checkDigit === expect
  },
  rules: {
    regex: [/^(SE)(\d{10}01)$/]
  }
}
