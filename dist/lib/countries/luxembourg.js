export const luxembourg = {
    name: 'Luxembourg',
    codes: ['LU', 'LUX', '442'],
    calcFn: (vat) => {
        const expect = Number(vat.slice(6, 8));
        const checkDigit = Number(vat.slice(0, 6)) % 89;
        // Checks the check digits of a Luxembourg VAT number.
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(LU)(\d{8})$/]
    }
};
