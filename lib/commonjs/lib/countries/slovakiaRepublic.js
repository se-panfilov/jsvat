"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slovakiaRepublic = {
    name: 'Slovakia Republic',
    codes: ['SK', 'SVK', '703'],
    calcFn: function (vat) {
        var expect = 0;
        var checkDigit = (Number(vat) % 11);
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
    }
};
