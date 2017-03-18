// eslint-disable-next-line no-undef
exports.countries.greece = {
  name: 'Greece',
  codes: ['GR',	'GRC',	'300'],
  calcFn: function (vat) {
    var total = 0
    var expect

    // eight character numbers should be prefixed with an 0.
    if (vat.length === 8) {
      vat = '0' + vat
    }

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i]
    }

    // Establish check digit.
    total = total % 11
    if (total > 9) {
      total = 0
    }

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(8, 9)
    return total === expect
  },
  rules: {
    multipliers: [
      256,
      128,
      64,
      32,
      16,
      8,
      4,
      2
    ],
    regex: [/^(EL)(\d{9})$/]
  }
}
