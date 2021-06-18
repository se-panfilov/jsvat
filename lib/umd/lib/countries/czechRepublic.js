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
    exports.czechRepublic = void 0;
    exports.czechRepublic = {
        name: 'Czech Republic',
        codes: ['CZ', 'CZE', '203'],
        calcFn: (vat) => {
            const { rules } = exports.czechRepublic;
            const { multipliers, additional, lookup } = rules;
            if (!additional)
                return false;
            return (isLegalEntities(vat, multipliers.common, additional) ||
                isIndividualType2(vat, multipliers.common, additional, lookup) ||
                isIndividualType3(vat, additional) ||
                isIndividualType1(vat, additional));
        },
        rules: {
            multipliers: {
                common: [8, 7, 6, 5, 4, 3, 2]
            },
            lookup: [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
            regex: [/^(CZ)(\d{8,10})(\d{3})?$/],
            additional: [/^\d{8}$/, /^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/, /^6\d{8}$/, /^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/]
        }
    };
    function isLegalEntities(vat, multipliers, additional) {
        let total = 0;
        if (additional[0].test(vat)) {
            // Extract the next digit and multiply by the counter.
            for (let i = 0; i < 7; i++) {
                total += Number(vat.charAt(i)) * multipliers[i];
            }
            // Establish check digit.
            total = 11 - (total % 11);
            if (total === 10)
                total = 0;
            if (total === 11)
                total = 1;
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            const expect = Number(vat.slice(7, 8));
            return total === expect;
        }
        return false;
    }
    function isIndividualType1(vat, additional) {
        if (additional[1].test(vat)) {
            return Number(vat.slice(0, 2)) <= 62;
        }
        return false;
    }
    function isIndividualType2(vat, multipliers, additional, lookup) {
        let total = 0;
        if (additional[2].test(vat)) {
            // Extract the next digit and multiply by the counter.
            for (let j = 0; j < 7; j++) {
                total += Number(vat.charAt(j + 1)) * multipliers[j];
            }
            // Establish check digit.
            let a;
            if (total % 11 === 0) {
                a = total + 11;
            }
            else {
                a = Math.ceil(total / 11) * 11;
            }
            const pointer = a - total - 1;
            // Convert calculated check digit according to a lookup table
            const expect = Number(vat.slice(8, 9));
            if (!lookup)
                return false;
            return lookup[pointer] === expect;
        }
        return false;
    }
    function isIndividualType3(vat, additional) {
        if (additional[3].test(vat)) {
            const temp = Number(vat.slice(0, 2)) +
                Number(vat.slice(2, 4)) +
                Number(vat.slice(4, 6)) +
                Number(vat.slice(6, 8)) +
                Number(vat.slice(8));
            const expect = Number(vat) % 11 === 0;
            return !!(temp % 11 === 0 && expect);
        }
        return false;
    }
});
