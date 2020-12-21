define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serbia = void 0;
    exports.serbia = {
        name: 'Serbia',
        codes: ['RS', 'SRB', '688'],
        calcFn: (vat) => {
            // Checks the check digits of a Serbian VAT number using ISO 7064, MOD 11-10 for check digit.
            let product = 10;
            let sum = 0;
            for (let i = 0; i < 8; i++) {
                // Extract the next digit and implement the algorithm
                sum = (Number(vat.charAt(i)) + product) % 10;
                if (sum === 0) {
                    sum = 10;
                }
                product = (2 * sum) % 11;
            }
            // Now check that we have the right check digit
            const expect = 1;
            const checkDigit = (product + Number(vat.slice(8, 9))) % 10;
            return checkDigit === expect;
        },
        rules: {
            multipliers: {},
            regex: [/^(RS)(\d{9})$/]
        }
    };
});
