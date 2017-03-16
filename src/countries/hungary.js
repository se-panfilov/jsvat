// eslint-disable-next-line no-undef
exports.countries.hungary = {
  name: 'Hungary',
  codes: ['HU', 'HUN', '348'],
  calcFn: function (vat) {
    var total = 0
    var expect

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i]
    }

    // Establish check digit.
    total = 10 - total % 10
    if (total === 10) total = 0

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(7, 8)
    return total === expect
  },
  rules: {
    multipliers: [
      9,
      7,
      3,
      1,
      9,
      7,
      3
    ],
    regex: [/^(HU)(\d{8})$/]
  }
}
