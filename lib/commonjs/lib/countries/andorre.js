"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.andorre = {
  name: 'Andorre',
  codes: ['AD', 'AND', '020'],
  calcFn: (vat) => {
    return vat.length === 8;
  },
  rules: {
    regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgopuFEALECDGOPU]{1})$/]
  }
};
