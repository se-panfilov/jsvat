import { Country } from '../jsvat';

export const italy: Country = {
  name: 'Italy',
  codes: ['IT', 'ITA', '380'],
  calcFn: (vat: string): boolean => {
    let total = 0;
    let temp;

    // The last three digits are the issuing office, and cannot exceed more 201, unless 999 or 888
    if (Number(vat.slice(0, 7)) === 0) {
      return false;
    }

    temp = Number(vat.slice(7, 10));
    if (temp < 1 || (temp > 201 && temp !== 999 && temp !== 888)) {
      return false;
    }

    // Extract the next digit and multiply by the appropriate
    for (let i = 0; i < 10; i++) {
      temp = Number(vat.charAt(i)) * italy.rules.multipliers.common[i];
      if (temp > 9) total += Math.floor(temp / 10) + (temp % 10);
      else total += temp;
    }

    // Establish check digit.
    total = 10 - (total % 10);
    if (total > 9) {
      total = 0;
    }

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    const expect = Number(vat.slice(10, 11));
    return total === expect;
  },
  rules: {
    multipliers: {
      common: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
    },
    regex: [/^(IT)(\d{11})$/]
  },
  example: 'IT12345678912'
};
