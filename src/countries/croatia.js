// eslint-disable-next-line no-undef
exports.countries.croatia = {
  name: 'Croatia',
  codes: ['HR',	'HRV',	'191'],
  calcFn: function (vat) {
    var expect

    // Checks the check digits of a Croatian VAT number using ISO 7064, MOD 11-10 for check digit.
    var product = 10
    var sum = 0

    for (var i = 0; i < 10; i++) {
      // Extract the next digit and implement the algorithm
      sum = (+vat.charAt(i) + product) % 10
      if (sum === 0) {
        sum = 10
      }

      product = (2 * sum) % 11
    }

    // Now check that we have the right check digit
    expect = +vat.slice(10, 11)
    return (product + expect) % 10 === 1
  },
  rules: {
    regex: [/^(HR)(\d{11})$/]
  }
}
