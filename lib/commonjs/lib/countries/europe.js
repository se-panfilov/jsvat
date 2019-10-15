"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.europe = {
    name: 'Europe',
    codes: ['EU', 'EUR', '000'],
    calcFn: function () {
        // We know little about EU numbers apart from the fact that the first 3 digits represent the
        // country, and that there are nine digits in total.
        return true;
    },
    rules: {
        multipliers: {},
        regex: [/^(EU)(\d{9})$/]
    }
};
