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
    exports.luxembourg = void 0;
    exports.luxembourg = {
        name: 'Luxembourg',
        codes: ['LU', 'LUX', '442'],
        calcFn: (vat) => {
            const expect = Number(vat.slice(6, 8));
            const checkDigit = Number(vat.slice(0, 6)) % 89;
            // Checks the check digits of a Luxembourg VAT number.
            return checkDigit === expect;
        },
        rules: {
            multipliers: {},
            regex: [/^(LU)(\d{8})$/]
        },
        example: 'LU12345678'
    };
});
