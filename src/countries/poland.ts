import { Country } from '../main';

export const poland: Country = {
  name: 'Poland',
  codes: ['PL', 'POL', '616'],
  calcFn: function (vat: string): boolean {
    if (!this.rules.multipliers) return false;
    if (!Array.isArray(this.rules.multipliers)) return false;
    let total = 0;
    let expect;

    // Extract the next digit and multiply by the counter.
    for (let i = 0; i < 9; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    // Establish check digits subtracting modulus 11 from 11.
    total = total % 11;
    if (total > 9) {
      total = 0;
    }

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(9, 10);
    return total === expect;
  },
  rules: {
    multipliers: [6, 5, 7, 2, 3, 4, 5, 6, 7],
    regex: [/^(PL)(\d{10})$/]
  }
};
