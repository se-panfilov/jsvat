import { Country } from '../jsvat';

export const andorre: Country = {
  name: 'Andorre',
  codes: ['AD', 'AND', '020'],
  calcFn: (vat: string): boolean => {
    return vat.length === 8;
  },
  rules: {
    regex: [/^(AD)([a-zA-Z]{1}\d{6}[a-zA-Z]{1})$/]
  }
};
