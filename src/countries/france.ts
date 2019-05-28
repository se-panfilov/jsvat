import { Country } from '../main';

export const france: Country = {
  name: 'France',
  codes: ['FR', 'FRA', '250'],
  calcFn: (vat: string): boolean  => {
    let total;
    let expect;

    // Checks the check digits of a French VAT number.
    if (!(/^\d{11}$/).test(vat)) return true;


    // Extract the last nine digits as an integer.
    total = +vat.substring(2);

    // Establish check digit.
    total = (total * 100 + 12) % 97;

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(0, 2);
    return total === expect;
  },
  rules: {
    regex: [
      /^(FR)(\d{11})$/,
      /^(FR)([A-HJ-NP-Z]\d{10})$/,
      /^(FR)(\d[A-HJ-NP-Z]\d{9})$/,
      /^(FR)([A-HJ-NP-Z]{2}\d{9})$/
    ]
  }
};
