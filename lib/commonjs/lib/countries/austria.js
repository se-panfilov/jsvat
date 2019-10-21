"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.austria = {
    name: 'Austria',
    codes: ['AT', 'AUT', '040'],
    calcFn: function (vat) {
        var total = 0;
        for (var i = 0; i < 7; i++) {
            var temp = Number(vat.charAt(i)) * exports.austria.rules.multipliers.common[i];
            if (temp > 9) {
                total += Math.floor(temp / 10) + temp % 10;
            }
            else {
                total += temp;
            }
        }
        total = 10 - (total + 4) % 10;
        if (total === 10)
            total = 0;
        return total === Number(vat.slice(7, 8));
    },
    rules: {
        multipliers: {
            common: [1, 2, 1, 2, 1, 2, 1]
        },
        regex: [/^(AT)U(\d{8})$/]
    }
};
