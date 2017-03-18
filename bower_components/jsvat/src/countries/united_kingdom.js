// eslint-disable-next-line no-undef
exports.countries.united_kingdom = {
  name: 'United Kingdom',
  codes: ['GB',	'GBR',	'826'],
  calcFn: function (vat) {
    var total = 0
    var expect

    // Government departments
    if (vat.substr(0, 2) === 'GD') {
      expect = 500
      return vat.substr(2, 3) < expect
    }

    // Health authorities
    if (vat.substr(0, 2) === 'HA') {
      expect = 499
      return vat.substr(2, 3) > expect
    }

    // Standard and commercial numbers

    // 0 VAT numbers disallowed!
    if (+vat.slice(0) === 0) return false

    // Check range is OK for modulus 97 calculation
    var no = +vat.slice(0, 7)

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i]
    }

    // Old numbers use a simple 97 modulus, but new numbers use an adaptation of that (less 55). Our
    // VAT number could use either system, so we check it against both.

    // Establish check digits by subtracting 97 from total until negative.
    var checkDigit = total
    while (checkDigit > 0) {
      checkDigit = checkDigit - 97
    }

    // Get the absolute value and compare it with the last two characters of the VAT number. If the
    // same, then it is a valid traditional check digit. However, even then the number must fit within
    // certain specified ranges.
    checkDigit = Math.abs(checkDigit)
    if (checkDigit === +vat.slice(7, 9) && no < 9990001 && (no < 100000 || no > 999999) && (no < 9490001 || no > 9700000)) return true

    // Now try the new method by subtracting 55 from the check digit if we can - else add 42
    if (checkDigit >= 55)
      checkDigit = checkDigit - 55
    else
      checkDigit = checkDigit + 42
    expect = +vat.slice(7, 9)
    return !!(checkDigit === expect && no > 1000000)
  },
  rules: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    regex: [
      /^(GB)?(\d{9})$/,
      /^(GB)?(\d{12})$/,
      /^(GB)?(GD\d{3})$/,
      /^(GB)?(HA\d{3})$/
    ]
  }
}
