import { Country, Rules } from '../main';

export const russia: Country = {
  name: 'Russian Federation',
  codes: ['RU', 'RUS', '643'],
  calcFn: function (vat: string): boolean {
    function _check10DigitINN (vat: string, rules: Rules) {
      let total = 0;

      if (vat.length === 10) {
        if (!rules.multipliers) return false;
        if (Array.isArray(rules.multipliers)) return false;
        for (let i = 0; i < 10; i++) {
          total += +vat.charAt(i) * rules.multipliers.m_1[i];
        }

        total = total % 11;
        if (total > 9) {
          total = total % 10;
        }

        // Compare it with the last character of the VAT number. If it is the same, then it's valid
        const expect = +vat.slice(9, 10);
        return total === expect;
      }

      return false;
    }

    function _check12DigitINN (vat: string, rules: Rules) {
      let total1 = 0;
      let total2 = 0;

      if (vat.length === 12) {
        if (!rules.multipliers) return false;
        if (Array.isArray(rules.multipliers)) return false;
        for (let j = 0; j < 11; j++) {
          total1 += +vat.charAt(j) * rules.multipliers.m_2[j];
        }

        total1 = total1 % 11;

        if (total1 > 9) {
          total1 = total1 % 10;
        }

        for (let k = 0; k < 11; k++) {
          total2 += +vat.charAt(k) * rules.multipliers.m_3[k];
        }

        total2 = total2 % 11;
        if (total2 > 9) {
          total2 = total2 % 10;
        }

        // Compare the first check with the 11th character and the second check with the 12th and last
        // character of the VAT number. If they're both the same, then it's valid
        const expect = (total1 === +vat.slice(10, 11));
        const expect2 = (total2 === +vat.slice(11, 12));
        return (expect) && (expect2);
      }

      return false;
    }

    // See http://russianpartner.biz/test_inn.html for algorithm
    return _check10DigitINN(vat, this.rules) || _check12DigitINN(vat, this.rules);
  },
  rules: {
    multipliers: {
      m_1: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
      m_2: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
      m_3: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]
    },
    regex: [/^(RU)(\d{10}|\d{12})$/]
  }
};
