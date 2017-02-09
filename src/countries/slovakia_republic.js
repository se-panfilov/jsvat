// eslint-disable-next-line no-undef
COUNTRIES.slovakia_republic = {
  calcs: function (vat) {
    var expect = 0
    var checkDigit = (vat % 11)
    return checkDigit === expect
  },
  rules: {
    regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
  }
}
