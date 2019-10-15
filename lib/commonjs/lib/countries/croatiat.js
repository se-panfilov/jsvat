"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.croatia = {
    name: 'Croatia',
    codes: ['HR', 'HRV', '191'],
    calcFn: function (vat) {
        // Checks the check digits of a Croatian VAT number using ISO 7064, MOD 11-10 for check digit.
        var product = 10;
        var sum = 0;
        for (var i = 0; i < 10; i++) {
            // Extract the next digit and implement the algorithm
            sum = (Number(vat.charAt(i)) + product) % 10;
            if (sum === 0) {
                sum = 10;
            }
            product = (2 * sum) % 11;
        }
        // Now check that we have the right check digit
        var expect = Number(vat.slice(10, 11));
        return (product + expect) % 10 === 1;
    },
    rules: {
        multipliers: {},
        regex: [/^(HR)(\d{11})$/]
    }
};
