(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.portugal = void 0;
    exports.portugal = {
        name: 'Portugal',
        codes: ['PT', 'PRT', '620'],
        calcFn: (vat) => {
            let total = 0;
            // Extract the next digit and multiply by the counter.
            for (let i = 0; i < 8; i++) {
                total += Number(vat.charAt(i)) * exports.portugal.rules.multipliers.common[i];
            }
            // Establish check digits subtracting modulus 11 from 11.
            total = 11 - (total % 11);
            if (total > 9) {
                total = 0;
            }
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            const expect = Number(vat.slice(8, 9));
            return total === expect;
        },
        rules: {
            multipliers: {
                common: [9, 8, 7, 6, 5, 4, 3, 2]
            },
            regex: [/^(PT)(\d{9})$/]
        }
    };
});
