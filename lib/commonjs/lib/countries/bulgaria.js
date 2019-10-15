"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulgaria = {
    name: 'Bulgaria',
    codes: ['BG', 'BGR', '100'],
    calcFn: function (vat) {
        if (vat.length === 9)
            return _checkNineLengthVat(vat);
        var multipliers = exports.bulgaria.rules.multipliers;
        return _isPhysicalPerson(vat, multipliers.physical) || _isForeigner(vat, multipliers) || _miscellaneousVAT(vat, multipliers);
    },
    rules: {
        multipliers: {
            physical: [2, 4, 8, 5, 10, 9, 7, 3, 6],
            foreigner: [21, 19, 17, 13, 11, 9, 7, 3, 1],
            miscellaneous: [4, 3, 2, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(BG)(\d{9,10})$/]
    }
};
function _increase(value, vat, from, to, incr) {
    var result = value;
    for (var i = from; i < to; i++) {
        result += Number(vat.charAt(i)) * (i + incr);
    }
    return result;
}
function _increase2(value, vat, from, to, multipliers) {
    var result = value;
    for (var i = from; i < to; i++) {
        result += Number(vat.charAt(i)) * multipliers[i];
    }
    return result;
}
function _checkNineLengthVat(vat) {
    var total;
    var temp = _increase(0, vat, 0, 8, 1);
    var expect = Number(vat.slice(8));
    total = temp % 11;
    if (total !== 10)
        return total === expect;
    temp = _increase(0, vat, 0, 8, 3);
    total = temp % 11;
    if (total === 10)
        total = 0;
    return total === expect;
}
function _isPhysicalPerson(vat, physicalMultipliers) {
    // 10 digit VAT code - see if it relates to a standard physical person
    if ((/^\d\d[0-5]\d[0-3]\d\d{4}$/).test(vat)) {
        // Check month
        var month = Number(vat.slice(2, 4));
        if ((month > 0 && month < 13) || (month > 20 && month < 33) || (month > 40 && month < 53)) {
            var total = _increase2(0, vat, 0, 9, physicalMultipliers);
            // Establish check digit.
            total = total % 11;
            if (total === 10)
                total = 0;
            // Check to see if the check digit given is correct, If not, try next type of person
            if (total === Number(vat.substr(9, 1)))
                return true;
        }
    }
    return false;
}
function _isForeigner(vat, multipliers) {
    // Extract the next digit and multiply by the counter.
    var total = _increase2(0, vat, 0, 9, multipliers.foreigner);
    // Check to see if the check digit given is correct, If not, try next type of person
    return total % 10 === Number(vat.substr(9, 1));
}
function _miscellaneousVAT(vat, multipliers) {
    // Finally, if not yet identified, see if it conforms to a miscellaneous VAT number
    var total = _increase2(0, vat, 0, 9, multipliers.miscellaneous);
    // Establish check digit.
    total = 11 - total % 11;
    if (total === 10)
        return false;
    if (total === 11)
        total = 0;
    // Check to see if the check digit given is correct, If not, we have an error with the VAT number
    var expect = Number(vat.substr(9, 1));
    return total === expect;
}
