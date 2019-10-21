"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.latvia = {
    name: 'Latvia',
    codes: ['LV', 'LVA', '428'],
    calcFn: function (vat) {
        var total = 0;
        // Differentiate between legal entities and natural bodies. For the latter we simply check that
        // the first six digits correspond to valid DDMMYY dates.
        if ((/^[0-3]/).test(vat)) {
            return Boolean((/^[0-3][0-9][0-1][0-9]/).test(vat));
        }
        else {
            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 10; i++) {
                total += Number(vat.charAt(i)) * exports.latvia.rules.multipliers.common[i];
            }
            // Establish check digits by getting modulus 11.
            if (total % 11 === 4 && Number(vat[0]) === 9)
                total = total - 45;
            if (total % 11 === 4) {
                total = 4 - total % 11;
            }
            else if (total % 11 > 4) {
                total = 14 - total % 11;
            }
            else if (total % 11 < 4) {
                total = 3 - total % 11;
            }
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            var expect = Number(vat.slice(10, 11));
            return total === expect;
        }
    },
    rules: {
        multipliers: {
            common: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6]
        },
        regex: [/^(LV)(\d{11})$/]
    }
};
