import { Country } from '../main';

export const slovakiaRepublic: Country = {
  name: 'Slovakia Republic',
  codes: ['SK', 'SVK', '703'],
  calcFn: (vat: string): boolean => {
    const expect = 0;
    const checkDigit = (Number(vat) % 11);
    return checkDigit === expect;
  },
  rules: {
    regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
  }
};
