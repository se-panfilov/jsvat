export const andorra = {
    name: 'Andorra',
    codes: ['AD', 'AND', '020'],
    calcFn: (vat) => {
        return vat.length === 8;
    },
    rules: {
        multipliers: {},
        regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgopuFEALECDGOPU]{1})$/]
    }
};
