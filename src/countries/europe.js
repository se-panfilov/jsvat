// eslint-disable-next-line no-undef
COUNTRIES.europe = {
  calcs: function () {
    // We know little about EU numbers apart from the fact that the first 3 digits represent the
    // country, and that there are nine digits in total.
    return true
  },
  rules: {
    regex: [/^(EU)(\d{9})$/]
  }
}
