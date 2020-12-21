"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.andorra = void 0;
exports.andorra = {
    name: 'Andorra',
    codes: ['AD', 'AND', '020'],
    calcFn: function (vat) {
        return vat.length === 8;
    },
    rules: {
        multipliers: {},
        regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgopuFEALECDGOPU]{1})$/]
    }
};
