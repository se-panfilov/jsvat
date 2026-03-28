(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define(["require", "exports"], factory);
  }
})(function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.austria = {
    name: 'Andorra',
    codes: ['AD', 'AND', '020'],
    calcFn: (vat) => {
      let firstLetter = vat.slice(0, 1).toUpperCase();
      let number = parseInt(vat.slice(1, 7));

      if (vat.length !== 8) {
        return false;
      }
      if (!'ACDEFGLOPU'.includes(firstLetter)) {
        return false
      }
      if (firstLetter === 'F' && number > 699999) {
        return false;
      }
      if ('AL'.includes(firstLetter) && number > 699999 && number < 800000) {
        return false;
      }
      return true;
    },
    rules: {
      multipliers: {},
      regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgoputFEALECDGOPUT]{1})$/]
    }
  };
});
