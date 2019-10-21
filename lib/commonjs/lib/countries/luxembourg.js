"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.luxembourg = {
    name: 'Luxembourg',
    codes: ['LU', 'LUX', '442'],
    calcFn: function (vat) {
        var expect = Number(vat.slice(6, 8));
        var checkDigit = Number(vat.slice(0, 6)) % 89;
        // Checks the check digits of a Luxembourg VAT number.
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(LU)(\d{8})$/]
    }
};
