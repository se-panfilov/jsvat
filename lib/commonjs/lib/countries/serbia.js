"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serbia = {
    name: 'Serbia',
    codes: ['RS', 'SRB', '688'],
    calcFn: function (vat) {
        // Checks the check digits of a Serbian VAT number using ISO 7064, MOD 11-10 for check digit.
        var product = 10;
        var sum = 0;
        for (var i = 0; i < 8; i++) {
            // Extract the next digit and implement the algorithm
            sum = (Number(vat.charAt(i)) + product) % 10;
            if (sum === 0) {
                sum = 10;
            }
            product = (2 * sum) % 11;
        }
        // Now check that we have the right check digit
        var expect = 1;
        var checkDigit = (product + (Number(vat.slice(8, 9)))) % 10;
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(RS)(\d{9})$/]
    }
};
