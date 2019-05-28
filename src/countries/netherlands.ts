import { Country } from '../main';

export const netherlands: Country = {
  name: 'Netherlands',
  codes: ['NL', 'NLD', '528'],
  calcFn: function (vat: string): boolean {
    if (!this.rules.multipliers) return false;
    if (!Array.isArray(this.rules.multipliers)) return false;
    let total = 0;
    let expect;

    // Extract the next digit and multiply by the counter.
    for (let i = 0; i < 8; i++) {
      total += Number(vat.charAt(i)) * this.rules.multipliers[i];
    }

    // Establish check digits by getting modulus 11.
    total = total % 11;
    if (total > 9) {
      total = 0;
    }

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +Number(vat.slice(8, 9));
    return total === expect;
  },
  rules: {
    multipliers: [9, 8, 7, 6, 5, 4, 3, 2],
    regex: [/^(NL)(\d{9})B\d{2}$/]
  }
};
