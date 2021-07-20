import { Country } from '../jsvat';

export const andorra: Country = {
  name: 'Andorra',
  codes: ['AD', 'AND', '020'],
  calcFn: (vat:string) => {
    let firstLetter:string = vat.slice(0, 1).toUpperCase();
    let number:number = parseInt(vat.slice(1, 7));

    if (vat.length !== 8) {
      return false;
    }
    if (!'ACDEFGLOPU'.includes(firstLetter)) {
      return false
    }
    if (firstLetter === 'F' && number > 699999) {
      return false;
    }
    if ('AL'.includes(firstLetter) && number > 699999 && number < 800000) {
      return false;
    }
    return true;
  },
  rules: {
    multipliers:{},
    regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgoputFEALECDGOPUT]{1})$/]

  }
};
