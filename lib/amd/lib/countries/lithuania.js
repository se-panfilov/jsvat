define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lithuania = void 0;
    exports.lithuania = {
        name: 'Lithuania',
        codes: ['LT', 'LTU', '440'],
        calcFn: (vat) => {
            return _check9DigitVat(vat, exports.lithuania.rules) || _check12DigitVat(vat, exports.lithuania.rules);
        },
        rules: {
            multipliers: {
                short: [3, 4, 5, 6, 7, 8, 9, 1],
                med: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
                alt: [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]
            },
            check: /^\d{10}1/,
            regex: [/^(LT)(\d{9}|\d{12})$/]
        }
    };
    function _extractDigit(vat, multiplierList, key) {
        return Number(vat.charAt(key)) * multiplierList[key];
    }
    function _doubleCheckCalculation(vat, total, rules) {
        let result = total;
        if (result % 11 === 10) {
            result = 0;
            for (let i = 0; i < 8; i++) {
                result += _extractDigit(vat, rules.multipliers.short, i);
            }
        }
        return result;
    }
    function extractDigit(vat, total) {
        let result = total;
        for (let i = 0; i < 8; i++) {
            result += Number(vat.charAt(i)) * (i + 1);
        }
        return result;
    }
    function checkDigit(total) {
        let result = total % 11;
        if (result === 10) {
            result = 0;
        }
        return result;
    }
    function _check9DigitVat(vat, rules) {
        // 9 character VAT numbers are for legal persons
        let total = 0;
        if (vat.length === 9) {
            // 8th character must be one
            if (!/^\d{7}1/.test(vat))
                return false;
            // Extract the next digit and multiply by the counter+1.
            total = extractDigit(vat, total);
            // Can have a double check digit calculation!
            total = _doubleCheckCalculation(vat, total, rules);
            // Establish check digit.
            total = checkDigit(total);
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            const expect = Number(vat.slice(8, 9));
            return total === expect;
        }
        return false;
    }
    function extractDigit12(vat, total, rules) {
        let result = total;
        for (let k = 0; k < 11; k++) {
            result += _extractDigit(vat, rules.multipliers.med, k);
        }
        return result;
    }
    function _doubleCheckCalculation12(vat, total, rules) {
        let result = total;
        if (total % 11 === 10) {
            result = 0;
            for (let l = 0; l < 11; l++) {
                result += _extractDigit(vat, rules.multipliers.alt, l);
            }
        }
        return result;
    }
    function _check12DigitVat(vat, rules) {
        let total = 0;
        // 12 character VAT numbers are for temporarily registered taxpayers
        if (vat.length === 12) {
            if (!rules.check)
                return false;
            // 11th character must be one
            if (!rules.check.test(vat))
                return false;
            // Extract the next digit and multiply by the counter+1.
            total = extractDigit12(vat, total, rules);
            // Can have a double check digit calculation!
            total = _doubleCheckCalculation12(vat, total, rules);
            // Establish check digit.
            total = checkDigit(total);
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            const expect = Number(vat.slice(11, 12));
            return total === expect;
        }
        return false;
    }
});
