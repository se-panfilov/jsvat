COUNTRIES.slovakia_republic = {
  calcs: function (vat) {
    var expect = 0;
    var checkDigit = (vat % 11);
    return checkDigit === expect;
  }, rules: {}
};