import { Country } from '../jsvat';

export const andorre: Country = {
  name: 'Andorre',
  codes: ['AD', 'AND', '020'],
  calcFn: (vat: string): boolean => {
    return vat.length === 8;
  },
  rules: {
    regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgopuFEALECDGOPU]{1})$/]
  }
};
