import { Country } from '../main';

export const denmark: Country = {
  name: 'Denmark',
  codes: ['DK', 'DNK', '208'],
  calcFn: function (vat: string): boolean {
    if (!this.rules.multipliers) return false;
    if (!Array.isArray(this.rules.multipliers)) return false;
    let total = 0;

    for (let i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    return total % 11 === 0;
  },
  rules: {
    multipliers: [2, 7, 6, 5, 4, 3, 2, 1],
    regex: [/^(DK)(\d{8})$/]
  }
};
