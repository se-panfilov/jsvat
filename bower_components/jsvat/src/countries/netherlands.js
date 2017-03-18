// eslint-disable-next-line no-undef
exports.countries.netherlands = {
  name: 'Netherlands',
  codes: ['NL', 'NLD', '528'],
  calcFn: function (vat) {
    var total = 0
    var expect

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i]
    }

    // Establish check digits by getting modulus 11.
    total = total % 11
    if (total > 9) {
      total = 0
    }

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(8, 9)
    return total === expect
  },
  rules: {
    multipliers: [9, 8, 7, 6, 5, 4, 3, 2],
    regex: [/^(NL)(\d{9})B\d{2}$/]
  }
}
