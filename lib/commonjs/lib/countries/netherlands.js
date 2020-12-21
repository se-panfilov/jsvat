"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.netherlands = void 0;
exports.netherlands = {
    name: 'Netherlands',
    codes: ['NL', 'NLD', '528'],
    calcFn: function (input) {
        var vat = input.replace(/[\ \-\_]/g, '').toUpperCase();
        var _a = exports.netherlands.rules, additional = _a.additional, multipliers = _a.multipliers;
        if (!additional)
            return false;
        var match = vat.match(additional[0]);
        if (!match || !match[1])
            return false;
        var numb = match[1];
        var characterValues = ("NL" + vat).split('').map(getCharValue);
        var total = 0;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 8; i++) {
            total += Number(numb.charAt(i)) * multipliers.common[i];
        }
        // Establish check digits by getting modulus 11.
        total = total % 11;
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(numb.slice(8, 9));
        // is either 11 proof or 97 mod proof.
        return total === expect || isNinetySevenMod(characterValues.join(''));
    },
    rules: {
        multipliers: {
            common: [9, 8, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(NL)(\d{9}B\d{2})$/],
        additional: [/^(\d{9})B\d{2}$/]
    }
};
function getCharValue(char) {
    // if one of these set values
    if (char === '+')
        return 36;
    if (char === '*')
        return 37;
    // if A...Z return code VAL -55
    var code = char.charCodeAt(0) - 55;
    if (code > 9 && code < 91)
        return code;
    return parseInt(char, 10);
}
function isNinetySevenMod(value) {
    var remainder = mod(value, 97);
    return remainder === 1;
}
// custom module function, to check module on values above Number limit
function mod(value, divisor) {
    // Initialize result
    var res = 0;
    for (var _i = 0, _a = value.split(''); _i < _a.length; _i++) {
        var char = _a[_i];
        res = (res * 10 + +char) % divisor;
    }
    return res;
}
