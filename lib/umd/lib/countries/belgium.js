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
    exports.belgium = void 0;
    exports.belgium = {
        name: 'Belgium',
        codes: ['BE', 'BEL', '056'],
        calcFn: (vat) => {
            const newVat = vat.length === 9 ? '0' + vat : vat;
            if (Number(newVat.slice(1, 2)) === 0)
                return false;
            const check = 97 - (Number(newVat.slice(0, 8)) % 97);
            return check === Number(newVat.slice(8, 10));
        },
        rules: {
            multipliers: {},
            regex: [/^(BE)(0?\d{9})$/]
        }
    };
});
