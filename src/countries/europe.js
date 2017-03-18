// eslint-disable-next-line no-undef
exports.countries.europe = {
  name: 'Europe',
  codes: ['EU', 'EUR', '000'], // TODO (S.Panfilov) that's not a real codes
  calcFn: function () {
    // We know little about EU numbers apart from the fact that the first 3 digits represent the
    // country, and that there are nine digits in total.
    return true
  },
  rules: {
    regex: [/^(EU)(\d{9})$/]
  }
}
