// eslint-disable-next-line no-undef
exports.countries.bulgaria = {
  name: 'Bulgaria',
  codes: ['BG', 'BGR', '100'],
  calcFn: function (vat) {
    function _increase (value, vat, from, to, incr) {
      for (var i = from; i < to; i++) {
        value += +vat.charAt(i) * (i + incr)
      }
      return value
    }

    function _increase2 (value, vat, from, to, multipliers) {
      for (var i = from; i < to; i++) {
        value += +vat.charAt(i) * multipliers[i]
      }
      return value
    }

    function _checkNineLengthVat (vat) {
      var total
      var temp = 0
      var expect = +vat.slice(8)

      temp = _increase(temp, vat, 0, 8, 1)

      total = temp % 11
      if (total !== 10) {
        return total === expect
      }

      temp = _increase(0, vat, 0, 8, 3)

      total = temp % 11
      if (total === 10) total = 0

      return total === expect
    }

    function _isPhysicalPerson (vat, rules) {
      // 10 digit VAT code - see if it relates to a standard physical person
      if ((/^\d\d[0-5]\d[0-3]\d\d{4}$/).test(vat)) {
        // Check month
        var month = +vat.slice(2, 4)
        if ((month > 0 && month < 13) || (month > 20 && month < 33) || (month > 40 && month < 53)) {
          var total = _increase2(0, vat, 0, 9, rules.multipliers.physical)
          // Establish check digit.
          total = total % 11
          if (total === 10) total = 0
          // Check to see if the check digit given is correct, If not, try next type of person
          if (total === +vat.substr(9, 1)) return true
        }
      }

      return false
    }

    function _isForeigner (vat, rules) {
      // Extract the next digit and multiply by the counter.
      var total = _increase2(0, vat, 0, 9, rules.multipliers.foreigner)

      // Check to see if the check digit given is correct, If not, try next type of person
      if (total % 10 === +vat.substr(9, 1)) {
        return true
      }
    }

    function _miscellaneousVAT (vat, rules) {
      // Finally, if not yet identified, see if it conforms to a miscellaneous VAT number
      var total = _increase2(0, vat, 0, 9, rules.multipliers.miscellaneous)

      // Establish check digit.
      total = 11 - total % 11
      if (total === 10) return false
      if (total === 11) total = 0

      // Check to see if the check digit given is correct, If not, we have an error with the VAT number
      var expect = +vat.substr(9, 1)
      return total === expect
    }

    if (vat.length === 9) {
      return _checkNineLengthVat(vat)
    } else {
      return _isPhysicalPerson(vat, this.rules) || _isForeigner(vat, this.rules) || _miscellaneousVAT(vat, this.rules)
    }
  },
  rules: {
    multipliers: {
      physical: [2, 4, 8, 5, 10, 9, 7, 3, 6],
      foreigner: [21, 19, 17, 13, 11, 9, 7, 3, 1],
      miscellaneous: [4, 3, 2, 7, 6, 5, 4, 3, 2]
    },
    regex: [/^(BG)(\d{9,10})$/]
  }
}
