// eslint-disable-next-line no-undef
exports.countries.slovakia_republic = {
  name: 'Slovakia_',
  codes: ['SK', 'SVK', '703'],
  calcFn: function (vat) {
    var expect = 0
    var checkDigit = (vat % 11)
    return checkDigit === expect
  },
  rules: {
    regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
  }
}
