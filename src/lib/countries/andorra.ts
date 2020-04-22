import { Country } from '../jsvat';

export const andorra: Country = {
  name: 'Andorra',
  codes: ['AD', 'AND', '020'],
  calcFn: (vat: string): boolean => {
    return vat.length === 8;
  },
  rules: {
    multipliers: {},
    regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgopuFEALECDGOPU]{1})$/]
  }
};
