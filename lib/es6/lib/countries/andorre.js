export const andorre = {
    name: 'Andorre',
    codes: ['AD', 'AND', '020'],
    calcFn: (vat) => {
        return vat.length === 8;
    },
    rules: {
        regex: [/^(AD)([a-zA-Z]{1}\d{6}[a-zA-Z]{1})$/]
    }
};
