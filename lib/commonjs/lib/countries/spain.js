"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spain = {
    name: 'Spain',
    codes: ['ES', 'ESP', '724'],
    calcFn: function (vat) {
        var _a = exports.spain.rules, additional = _a.additional, multipliers = _a.multipliers;
        if (!additional)
            return false;
        // National juridical entities
        if (additional[0].test(vat))
            return isNationalJuridicalEntities(vat, multipliers.common);
        // Juridical entities other than national ones
        if (additional[1].test(vat))
            return isNonNationalJuridical(vat, multipliers.common);
        // Personal number (NIF) (starting with numeric of Y or Z)
        if (additional[2].test(vat))
            return isPersonalYtoZ(vat);
        // Personal number (NIF) (starting with K, L, M, or X)
        if (additional[3].test(vat))
            return isPersonalKtoX(vat);
        return false;
    },
    rules: {
        multipliers: {
            common: [2, 1, 2, 1, 2, 1, 2]
        },
        regex: [
            /^(ES)([A-Z]\d{8})$/,
            /^(ES)([A-HN-SW]\d{7}[A-J])$/,
            /^(ES)([0-9YZ]\d{7}[A-Z])$/,
            /^(ES)([KLMX]\d{7}[A-Z])$/
        ],
        additional: [
            /^[A-H|J|U|V]\d{8}$/,
            /^[A-H|N-S|W]\d{7}[A-J]$/,
            /^[0-9|Y|Z]\d{7}[A-Z]$/,
            /^[K|L|M|X]\d{7}[A-Z]$/
        ]
    }
};
function extractDigitAndMultiplyByCounter(vat, multipliers, total) {
    var temp;
    var result = total;
    for (var i = 0; i < 7; i++) {
        temp = Number(vat.charAt(i + 1)) * multipliers[i];
        if (temp > 9) {
            result += Math.floor(temp / 10) + temp % 10;
        }
        else {
            result += temp;
        }
    }
    return result;
}
function isNationalJuridicalEntities(vat, multipliers) {
    var total = extractDigitAndMultiplyByCounter(vat, multipliers, 0);
    // Now calculate the check digit itself.
    total = 10 - total % 10;
    if (total === 10) {
        total = 0;
    }
    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    var expect = Number(vat.slice(8, 9));
    return total === expect;
}
function isNonNationalJuridical(vat, multipliers) {
    var total = extractDigitAndMultiplyByCounter(vat, multipliers, 0);
    // Now calculate the check digit itself.
    total = 10 - total % 10;
    var totalStr = String.fromCharCode(total + 64);
    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    var expect = vat.slice(8, 9);
    return totalStr === expect;
}
function isPersonalYtoZ(vat) {
    var tempNumber = vat;
    if (tempNumber.substring(0, 1) === 'Y')
        tempNumber = tempNumber.replace(/Y/, '1');
    if (tempNumber.substring(0, 1) === 'Z')
        tempNumber = tempNumber.replace(/Z/, '2');
    var expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempNumber.substring(0, 8) % 23);
    return tempNumber.charAt(8) === expect;
}
function isPersonalKtoX(vat) {
    var expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(Number(vat.substring(1, 8)) % 23);
    return vat.charAt(8) === expect;
}
