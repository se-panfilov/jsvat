import { Country } from '../jsvat';

export const malta: Country = {
  name: 'Malta',
  codes: ['MT', 'MLT', '470'],
  calcFn: (vat: string): boolean => {
    let total = 0;

    // Extract the next digit and multiply by the counter.
    for (let i = 0; i < 6; i++) {
      total += Number(vat.charAt(i)) * malta.rules.multipliers.common[i];
    }

    // Establish check digits by getting modulus 37.
    total = 37 - (total % 37);

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    const expect = Number(vat.slice(6, 8));
    return total === expect;
  },
  rules: {
    multipliers: {
      common: [3, 4, 6, 7, 8, 9]
    },
    regex: [/^(MT)([1-9]\d{7})$/]
  },
  example: 'MT12345678'
};
