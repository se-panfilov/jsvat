import { Country } from '../jsvat';

export const poland: Country = {
  name: 'Poland',
  codes: ['PL', 'POL', '616'],
  calcFn: (vat: string): boolean => {
    let total = 0;

    // Extract the next digit and multiply by the counter.
    for (let i = 0; i < 9; i++) {
      total += Number(vat.charAt(i)) * poland.rules.multipliers.common[i];
    }

    // Establish check digits subtracting modulus 11 from 11.
    total = total % 11;
    if (total > 9) {
      total = 0;
    }

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    const expect = Number(vat.slice(9, 10));
    return total === expect;
  },
  rules: {
    multipliers: {
      common: [6, 5, 7, 2, 3, 4, 5, 6, 7]
    },
    regex: [/^(PL)(\d{10})$/]
  },
  example: 'PL1234567890'
};
