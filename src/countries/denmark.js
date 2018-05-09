// eslint-disable-next-line no-undef
exports.countries.denmark = {
  name: 'Denmark',
  codes: ['DK', 'DNK', '208'],
  calcFn: function (vat) {
    var total = 0

    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i]
    }

    return total % 11 === 0
  },
  rules: {
    multipliers: [2, 7, 6, 5, 4, 3, 2, 1],
    regex: [/^(DK)(\d{8})$/]
  }
}
