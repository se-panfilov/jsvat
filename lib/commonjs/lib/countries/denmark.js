"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.denmark = {
    name: 'Denmark',
    codes: ['DK', 'DNK', '208'],
    calcFn: function (vat) {
        var total = 0;
        for (var i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * exports.denmark.rules.multipliers.common[i];
        }
        return total % 11 === 0;
    },
    rules: {
        multipliers: {
            common: [2, 7, 6, 5, 4, 3, 2, 1]
        },
        regex: [/^(DK)(\d{8})$/]
    }
};
