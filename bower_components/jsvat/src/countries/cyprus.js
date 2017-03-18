// eslint-disable-next-line no-undef
exports.countries.cyprus = {
  name: 'Cyprus',
  codes: ['CY', 'CYP', '196'],
  calcFn: function (vat) {
    var total = 0
    var expect

    // Not allowed to start with '12'
    if (+vat.slice(0, 2) === 12) return false

    // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 8; i++) {
      var temp = +vat.charAt(i)
      if (i % 2 === 0) {
        switch (temp) {
          case 0:
            temp = 1
            break
          case 1:
            temp = 0
            break
          case 2:
            temp = 5
            break
          case 3:
            temp = 7
            break
          case 4:
            temp = 9
            break
          default:
            temp = temp * 2 + 3
        }
      }
      total += temp
    }

    // Establish check digit using modulus 26, and translate to char. equivalent.
    total = total % 26
    total = String.fromCharCode(total + 65)

    // Check to see if the check digit given is correct
    expect = vat.substr(8, 1)
    return total === expect
  },
  rules: {
    regex: [/^(CY)([0-59]\d{7}[A-Z])$/]
  }
}
