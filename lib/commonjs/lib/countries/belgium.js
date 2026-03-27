"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.belgium = void 0;
exports.belgium = {
    name: 'Belgium',
    codes: ['BE', 'BEL', '056'],
    calcFn: function (vat) {
        var newVat = vat.length === 9 ? '0' + vat : vat;
        var check = 97 - (Number(newVat.slice(0, 8)) % 97);
        return check === Number(newVat.slice(8, 10));
    },
    rules: {
        multipliers: {},
        regex: [/^(BE)([0-1]?\d{9})$/]
    }
};
