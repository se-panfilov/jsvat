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
    exports.austria = {
        name: 'Andorre',
        codes: ['AD', 'AND', '020'],
        calcFn: (vat) => {
          return vat.length === 8;
        },
        rules: {
          regex: [/^(AD)([a-zA-Z]{1}\d{6}[a-zA-Z]{1})$/]
        }
    };
});
