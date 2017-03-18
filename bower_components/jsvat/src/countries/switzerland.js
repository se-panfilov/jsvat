// eslint-disable-next-line no-undef
exports.countries.switzerland = {
  name: 'Switzerland',
  codes: ['CH',	'CHE',	'756'],
  calcFn: function (vat) {
    var total = 0
    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i]
    }

    // Establish check digit.
    total = 11 - total % 11
    if (total === 10) return false
    if (total === 11) total = 0

    // Check to see if the check digit given is correct, If not, we have an error with the VAT number
    var expect = +vat.substr(8, 1)
    return total === expect
  },
  rules: {
    multipliers: [5, 4, 3, 2, 7, 6, 5, 4],
    regex: [/^(CHE)(\d{9})(MWST)?$/]
  }
}
