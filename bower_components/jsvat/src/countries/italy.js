// eslint-disable-next-line no-undef
exports.countries.italy = {
  name: 'Italy',
  codes: ['IT',	'ITA',	'380'],
  calcFn: function (vat) {
    var total = 0
    var temp
    var expect

    // The last three digits are the issuing office, and cannot exceed more 201, unless 999 or 888
    if (+vat.slice(0, 7) === 0) {
      return false
    }

    temp = +vat.slice(7, 10)
    if ((temp < 1) || (temp > 201) && temp !== 999 && temp !== 888) {
      return false
    }

    // Extract the next digit and multiply by the appropriate
    for (var i = 0; i < 10; i++) {
      temp = +vat.charAt(i) * this.rules.multipliers[i]
      if (temp > 9)
        total += Math.floor(temp / 10) + temp % 10
      else
        total += temp
    }

    // Establish check digit.
    total = 10 - total % 10
    if (total > 9) {
      total = 0
    }

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(10, 11)
    return total === expect
  },
  rules: {
    multipliers: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    regex: [/^(IT)(\d{11})$/]
  }
}
