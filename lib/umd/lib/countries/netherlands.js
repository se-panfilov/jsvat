var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jsbi"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const jsbi_1 = __importDefault(require("jsbi"));
    exports.netherlands = {
        name: "Netherlands",
        codes: ["NL", "NLD", "528"],
        calcFn: (input) => {
            const vat = input.replace(/[\ \-\_]/g, "").toUpperCase();
            const { additional, multipliers } = exports.netherlands.rules;
            if (!additional)
                return false;
            const match = vat.match(additional[0]);
            if (!match || !match[1])
                return false;
            const numb = match[1];
            const characterValues = `NL${vat}`.split("").map(getCharValue);
            let total = 0;
            // Extract the next digit and multiply by the counter.
            for (let i = 0; i < 8; i++) {
                total += Number(numb.charAt(i)) * multipliers.common[i];
            }
            // Establish check digits by getting modulus 11.
            total = total % 11;
            if (total > 9) {
                total = 0;
            }
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            const expect = Number(numb.slice(8, 9));
            // is either 11 proof or 97 mod proof.
            return total === expect || isNinetySevenMod(characterValues.join(""));
        },
        rules: {
            multipliers: {
                common: [9, 8, 7, 6, 5, 4, 3, 2],
            },
            regex: [/^(NL)(\d{9}B\d{2})$/],
            additional: [/^(\d{9})B\d{2}$/],
        },
    };
    function getCharValue(char) {
        // if one of these set values
        if (char === "+")
            return 36;
        if (char === "*")
            return 37;
        // if A...Z return code VAL -55
        const code = char.charCodeAt(0) - 55;
        if (code > 9 && code < 91)
            return code;
        return parseInt(char, 10);
    }
    function isNinetySevenMod(value) {
        const remainder = jsbi_1.default.toNumber(jsbi_1.default.remainder(jsbi_1.default.BigInt(value), jsbi_1.default.BigInt(97)));
        return remainder === 1;
    }
});
