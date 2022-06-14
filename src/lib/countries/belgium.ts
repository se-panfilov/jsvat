import { Country } from '../jsvat';

export const belgium: Country = {
  name: 'Belgium',
  codes: ['BE', 'BEL', '056'],
  calcFn: (vat: string): boolean => {
    const newVat = vat.length === 9 ? '0' + vat : vat;

    const check = 97 - (Number(newVat.slice(0, 8)) % 97);
    return check === Number(newVat.slice(8, 10));
  },
  rules: {
    multipliers: {},
    regex: [/^(BE)([0-1]?\d{9})$/]
  }
};
