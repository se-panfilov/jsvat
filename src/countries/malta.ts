import { Country } from '../main';

export const malta: Country = {
  name: 'Malta',
  codes: ['MT', 'MLT', '470'],
  calcFn: function (vat: string): boolean {
    if (!this.rules.multipliers) return false;
    let total = 0;
    let expect;

    // Extract the next digit and multiply by the counter.
    for (let i = 0; i < 6; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    // Establish check digits by getting modulus 37.
    total = 37 - total % 37;

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = Number(vat.slice(6, 8));
    return total === expect;
  },
  rules: {
    multipliers: [3, 4, 6, 7, 8, 9],
    regex: [/^(MT)([1-9]\d{7})$/]
  }
};
