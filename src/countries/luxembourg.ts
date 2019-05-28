import { Country } from '../main';

export const luxembourg: Country = {
  name: 'Luxembourg',
  codes: ['LU', 'LUX', '442'],
  calcFn: function (vat: string) {
    var expect = +vat.slice(6, 8);
    var checkDigit = +vat.slice(0, 6) % 89;
    // Checks the check digits of a Luxembourg VAT number.

    return checkDigit === expect;
  },
  rules: {
    regex: [/^(LU)(\d{8})$/]
  }
};
