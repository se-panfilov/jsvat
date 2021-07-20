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
    exports.slovenia = void 0;
    exports.slovenia = {
        name: 'Slovenia',
        codes: ['SI', 'SVN', '705'],
        calcFn: (vat) => {
            let total = 0;
            // Extract the next digit and multiply by the counter.
            for (let i = 0; i < 7; i++) {
                total += Number(vat.charAt(i)) * exports.slovenia.rules.multipliers.common[i];
            }
            // Establish check digits using modulus 11
            total = 11 - (total % 11);
            if (total === 10) {
                total = 0;
            }
            // Compare the number with the last character of the VAT number. If it is the
            // same, then it's a valid check digit.
            const expect = Number(vat.slice(7, 8));
            return !!(total !== 11 && total === expect);
        },
        rules: {
            multipliers: {
                common: [8, 7, 6, 5, 4, 3, 2]
            },
            regex: [/^(SI)([1-9]\d{7})$/]
        }
    };
});
