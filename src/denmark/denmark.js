COUNTRIES.denmark = {
  calcs: function (vat) {
    var total = 0;

    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    return total % 11 === 0;
  }, rules: {}
};