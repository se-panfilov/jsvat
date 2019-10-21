"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.norway = {
    name: 'Norway',
    codes: ['NO', 'NOR', '578'],
    calcFn: function (vat) {
        var total = 0;
        // See http://www.brreg.no/english/coordination/number.html
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * exports.norway.rules.multipliers.common[i];
        }
        // Establish check digits by getting modulus 11. Check digits > 9 are invalid
        total = 11 - total % 11;
        if (total === 11) {
            total = 0;
        }
        if (total < 10) {
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            var expect = Number(vat.slice(8, 9));
            return total === expect;
        }
        return false;
    },
    rules: {
        multipliers: {
            common: [3, 2, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(NO)(\d{9})$/]
    }
};
