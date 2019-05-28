import { Country } from '../main';

export const norway: Country = {
  name: 'Norway',
  codes: ['NO', 'NOR', '578'],
  calcFn: (vat: string): boolean  => {
    if (!this.rules.multipliers) return false;
    if (!Array.isArray(this.rules.multipliers)) return false;
    let total = 0;
    let expect;
    // See http://www.brreg.no/english/coordination/number.html

    // Extract the next digit and multiply by the counter.
    for (let i = 0; i < 8; i++) {
      total += Number(vat.charAt(i)) * this.rules.multipliers[i];
    }

    // Establish check digits by getting modulus 11. Check digits > 9 are invalid
    total = 11 - total % 11;

    if (total === 11) {
      total = 0;
    }

    if (total < 10) {
      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(8, 9);
      return total === expect;
    }

    return false;
  },
  rules: {
    multipliers: [3, 2, 7, 6, 5, 4, 3, 2],
    regex: [/^(NO)(\d{9})$/]
  }
};
