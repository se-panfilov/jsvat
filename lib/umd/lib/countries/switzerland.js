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
    exports.switzerland = void 0;
    exports.switzerland = {
        name: 'Switzerland',
        codes: ['CH', 'CHE', '756'],
        calcFn: (vat) => {
            let total = 0;
            for (let i = 0; i < 8; i++) {
                total += Number(vat.charAt(i)) * exports.switzerland.rules.multipliers.common[i];
            }
            // Establish check digit.s
            total = 11 - (total % 11);
            if (total === 10)
                return false;
            if (total === 11)
                total = 0;
            // Check to see if the check digit given is correct, If not, we have an error with the VAT number
            const expect = Number(vat.substr(8, 1));
            return total === expect;
        },
        rules: {
            multipliers: {
                common: [5, 4, 3, 2, 7, 6, 5, 4]
            },
            regex: [/^(CHE)(\d{9})(MWST|TVA|IVA)?$/]
        }
    };
});
