// eslint-disable-next-line no-undef
exports.countries.austria = {
  name: 'Austria',
  codes: ['AT', 'AUT', '040'],
  calcFn: function (vat) {
    var total = 0
    var temp

    for (var i = 0; i < 7; i++) {
      temp = vat.charAt(i) * this.rules.multipliers[i]

      if (temp > 9) {
        total += Math.floor(temp / 10) + temp % 10
      } else {
        total += temp
      }
    }

    total = 10 - (total + 4) % 10
    if (total === 10) total = 0

    return total === +vat.slice(7, 8)
  },
  rules: {
    multipliers: [1, 2, 1, 2, 1, 2, 1],
    regex: [/^(AT)U(\d{8})$/]
  }
}
