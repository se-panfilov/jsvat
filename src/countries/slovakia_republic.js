// @flow

// eslint-disable-next-line camelcase
export const slovakia_republic = {
  name: 'Slovakia_Republic',
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
