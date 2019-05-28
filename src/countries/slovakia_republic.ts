import { Country } from '../main';

// eslint-disable-next-line camelcase
export const slovakia_republic: Country = {
  name: 'Slovakia_Republic',
  codes: ['SK', 'SVK', '703'],
  calcFn: (vat: string): boolean  => {
    const expect = 0;
    const checkDigit = (Number(vat) % 11);
    return checkDigit === expect;
  },
  rules: {
    regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
  }
};
