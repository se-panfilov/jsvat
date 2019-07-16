import { Country } from '../jsvat';

export const switzerland: Country = {
  name: 'Switzerland',
  codes: ['CH', 'CHE', '756'],
  calcFn: (vat: string): boolean  => {
    let total = 0;
    for (let i = 0; i < 8; i++) {
      total += Number(vat.charAt(i)) * switzerland.rules.multipliers.common[i];
    }

    // Establish check digit.s
    total = 11 - total % 11;
    if (total === 10) return false;
    if (total === 11) total = 0;

    // Check to see if the check digit given is correct, If not, we have an error with the VAT number
    const expect = Number(vat.substr(8, 1));
    return total === expect;
  },
  rules: {
    multipliers: {
      common: [5, 4, 3, 2, 7, 6, 5, 4]
    },
    regex: [/^(CHE)(\d{9})(MWST|TVA|IVA)?$/]
  }
};
