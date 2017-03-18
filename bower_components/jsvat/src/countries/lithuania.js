// eslint-disable-next-line no-undef
exports.countries.lithuania = {
  name: 'Lithuania',
  codes: ['LT', 'LTU', '440'],
  calcFn: function (vat) {
    function _extractDigit (vat, multiplier, key) {
      return +vat.charAt(key) * multiplier[key]
    }

    function _doubleCheckCalculation (vat, total, rules) {
      if (total % 11 === 10) {
        total = 0
        for (var i = 0; i < 8; i++) {
          total += _extractDigit(vat, rules.multipliers.short, i)
        }
      }

      return total
    }

    function extractDigit (vat, total) {
      for (var i = 0; i < 8; i++) {
        total += +vat.charAt(i) * (i + 1)
      }
      return total
    }

    function checkDigit (total) {
      total = total % 11
      if (total === 10) {
        total = 0
      }

      return total
    }

    function _check9DigitVat (vat, rules) {
      // 9 character VAT numbers are for legal persons
      var total = 0
      if (vat.length === 9) {
        // 8th character must be one
        if (!(/^\d{7}1/).test(vat)) return false

        // Extract the next digit and multiply by the counter+1.
        total = extractDigit(vat, total)

        // Can have a double check digit calculation!
        total = _doubleCheckCalculation(vat, total, rules)

        // Establish check digit.
        total = checkDigit(total)

        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = +vat.slice(8, 9)
        return total === expect
      }
      return false
    }

    function extractDigit12 (vat, total, rules) {
      for (var k = 0; k < 11; k++) {
        total += _extractDigit(vat, rules.multipliers.med, k)
      }
      return total
    }

    function _doubleCheckCalculation12 (vat, total, rules) {
      if (total % 11 === 10) {
        total = 0
        for (var l = 0; l < 11; l++) {
          total += _extractDigit(vat, rules.multipliers.alt, l)
        }
      }

      return total
    }

    function _check12DigitVat (vat, rules) {
      var total = 0

      // 12 character VAT numbers are for temporarily registered taxpayers
      if (vat.length === 12) {
        // 11th character must be one
        if (!(rules.check).test(vat)) return false

        // Extract the next digit and multiply by the counter+1.
        total = extractDigit12(vat, total, rules)

        // Can have a double check digit calculation!
        total = _doubleCheckCalculation12(vat, total, rules)

        // Establish check digit.
        total = checkDigit(total)

        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = +vat.slice(11, 12)
        return total === expect
      }

      return false
    }

    return _check9DigitVat(vat, this.rules) || _check12DigitVat(vat, this.rules)
  },
  rules: {
    multipliers: {
      short: [3, 4, 5, 6, 7, 8, 9, 1],
      med: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
      alt: [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]
    },
    check: /^\d{10}1/,
    regex: [/^(LT)(\d{9}|\d{12})$/]
  }
}
