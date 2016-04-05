COUNTRIES.austria = {
  calcs: function (vat) {
    var total = 0;
    var temp;
    var expect;

    for (var i = 0; i < 7; i++) {
      temp = vat.charAt(i) * this.rules.multipliers[i];
      if (temp > 9)
        total += Math.floor(temp / 10) + temp % 10;
      else
        total += temp;
    }

    total = 10 - (total + 4) % 10;
    if (total === 10) total = 0;

    expect = +vat.slice(7, 8);

    return total === expect;
  }, rules: {}
};