import { Country } from '../main';

export const denmark: Country = {
  name: 'Denmark',
  codes: ['DK', 'DNK', '208'],
  calcFn: (vat: string): boolean  => {
    if (!denmark.rules.multipliers) return false;
    if (!Array.isArray(denmark.rules.multipliers)) return false;
    let total = 0;

    for (let i = 0; i < 8; i++) {
      total += Number(vat.charAt(i)) * denmark.rules.multipliers[i];
    }

    return total % 11 === 0;
  },
  rules: {
    multipliers: [2, 7, 6, 5, 4, 3, 2, 1],
    regex: [/^(DK)(\d{8})$/]
  }
};
