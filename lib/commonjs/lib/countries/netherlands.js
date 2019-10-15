"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.netherlands = {
    name: 'Netherlands',
    codes: ['NL', 'NLD', '528'],
    calcFn: function (vat) {
        var total = 0;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * exports.netherlands.rules.multipliers.common[i];
        }
        // Establish check digits by getting modulus 11.
        total = total % 11;
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(8, 9));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [9, 8, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(NL)(\d{9})B\d{2}$/]
    }
};
