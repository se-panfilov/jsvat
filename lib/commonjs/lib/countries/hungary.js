"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hungary = {
    name: 'Hungary',
    codes: ['HU', 'HUN', '348'],
    calcFn: function (vat) {
        var total = 0;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 7; i++) {
            total += Number(vat.charAt(i)) * exports.hungary.rules.multipliers.common[i];
        }
        // Establish check digit.
        total = 10 - total % 10;
        if (total === 10)
            total = 0;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(7, 8));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [9, 7, 3, 1, 9, 7, 3]
        },
        regex: [/^(HU)(\d{8})$/]
    }
};
