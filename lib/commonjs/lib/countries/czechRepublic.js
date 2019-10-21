"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.czechRepublic = {
    name: 'Czech Republic',
    codes: ['CZ', 'CZE', '203'],
    calcFn: function (vat) {
        var rules = exports.czechRepublic.rules;
        var multipliers = rules.multipliers, additional = rules.additional, lookup = rules.lookup;
        if (!additional)
            return false;
        return isLegalEntities(vat, multipliers.common, additional)
            || isIndividualType2(vat, multipliers.common, additional, lookup)
            || isIndividualType3(vat, additional)
            || isIndividualType1(vat, additional);
    },
    rules: {
        multipliers: {
            common: [8, 7, 6, 5, 4, 3, 2]
        },
        lookup: [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10],
        regex: [/^(CZ)(\d{8,10})(\d{3})?$/],
        additional: [
            /^\d{8}$/,
            /^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/,
            /^6\d{8}$/,
            /^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/
        ]
    }
};
function isLegalEntities(vat, multipliers, additional) {
    var total = 0;
    if (additional[0].test(vat)) {
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 7; i++) {
            total += Number(vat.charAt(i)) * multipliers[i];
        }
        // Establish check digit.
        total = 11 - total % 11;
        if (total === 10)
            total = 0;
        if (total === 11)
            total = 1;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(7, 8));
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
    var total = 0;
    if (additional[2].test(vat)) {
        // Extract the next digit and multiply by the counter.
        for (var j = 0; j < 7; j++) {
            total += Number(vat.charAt(j + 1)) * multipliers[j];
        }
        // Establish check digit.
        total = 11 - total % 11;
        if (total === 10)
            total = 0;
        if (total === 11)
            total = 1;
        // Convert calculated check digit according to a lookup table
        var expect = Number(vat.slice(8, 9));
        if (!lookup)
            return false;
        return lookup[total - 1] === expect;
    }
    return false;
}
function isIndividualType3(vat, additional) {
    if (additional[3].test(vat)) {
        var temp = Number(vat.slice(0, 2)) + Number(vat.slice(2, 4)) + Number(vat.slice(4, 6)) + Number(vat.slice(6, 8)) + Number(vat.slice(8));
        var expect = Number(vat) % 11 === 0;
        return !!(temp % 11 === 0 && expect);
    }
    return false;
}
