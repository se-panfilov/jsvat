// eslint-disable-next-line no-undef
exports.countries.serbia = {
  name: 'Serbia',
  codes: ['RS', 'SRB', '688'],
  calcFn: function (vat) {
    // Checks the check digits of a Serbian VAT number using ISO 7064, MOD 11-10 for check digit.

    var product = 10
    var sum = 0
    var checkDigit

    for (var i = 0; i < 8; i++) {
      // Extract the next digit and implement the algorithm
      sum = (+vat.charAt(i) + product) % 10
      if (sum === 0) {
        sum = 10
      }
      product = (2 * sum) % 11
    }

    // Now check that we have the right check digit
    var expect = 1
    checkDigit = (product + (+vat.slice(8, 9))) % 10
    return checkDigit === expect
  },
  rules: {
    regex: [/^(RS)(\d{9})$/]
  }
}
