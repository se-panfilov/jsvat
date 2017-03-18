// eslint-disable-next-line no-undef
exports.countries.belgium = {
  name: 'Belgium',
  codes: ['BE', 'BEL', '056'],
  calcFn: function (vat) {
    if (vat.length === 9) {
      vat = '0' + vat
    }

    if (+vat.slice(1, 2) === 0) return false

    var check = (97 - +vat.slice(0, 8) % 97)
    return check === +vat.slice(8, 10)
  },
  rules: {
    regex: [/^(BE)(0?\d{9})$/]
  }
}
