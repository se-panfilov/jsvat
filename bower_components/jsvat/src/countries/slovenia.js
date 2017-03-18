// eslint-disable-next-line no-undef
exports.countries.slovenia = {
  name: 'Slovenia',
  codes: ['SI', 'SVN', '705'],
  calcFn: function (vat) {
    var total = 0
    var expect

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i]
    }

    // Establish check digits using modulus 11
    total = 11 - total % 11
    if (total === 10) {
      total = 0
    }

    // Compare the number with the last character of the VAT number. If it is the
    // same, then it's a valid check digit.
    expect = +vat.slice(7, 8)
    return !!(total !== 11 && total === expect)
  },
  rules: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    regex: [/^(SI)([1-9]\d{7})$/]
  }
}
