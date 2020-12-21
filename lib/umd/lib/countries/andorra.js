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
    exports.andorra = void 0;
    exports.andorra = {
        name: 'Andorra',
        codes: ['AD', 'AND', '020'],
        calcFn: (vat) => {
            return vat.length === 8;
        },
        rules: {
            multipliers: {},
            regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgopuFEALECDGOPU]{1})$/]
        }
    };
});
