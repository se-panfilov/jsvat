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
    exports.finland = void 0;
    exports.finland = {
        name: 'Finland',
        codes: ['FI', 'FIN', '246'],
        calcFn: (vat) => {
            let total = 0;
            // Extract the next digit and multiply by the counter.
            for (let i = 0; i < 7; i++)
                total += Number(vat.charAt(i)) * exports.finland.rules.multipliers.common[i];
            // Establish check digit.
            total = 11 - (total % 11);
            if (total > 9) {
                total = 0;
            }
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            const expect = Number(vat.slice(7, 8));
            return total === expect;
        },
        rules: {
            multipliers: {
                common: [7, 9, 10, 5, 8, 4, 2]
            },
            regex: [/^(FI)(\d{8})$/]
        }
    };
});
