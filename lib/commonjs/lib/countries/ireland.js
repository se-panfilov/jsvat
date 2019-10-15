"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ireland = {
    name: 'Ireland',
    codes: ['IE', 'IRL', '372'],
    calcFn: function (vat) {
        var _a = exports.ireland.rules, typeFormats = _a.typeFormats, multipliers = _a.multipliers;
        if (!typeFormats || !typeFormats.first)
            return false;
        var total = 0;
        var newVat = vat;
        // If the code is type 1 format, we need to convert it to the new before performing the validation.
        if (typeFormats.first.test(vat)) {
            newVat = '0' + vat.substring(2, 7) + vat.substring(0, 1) + vat.substring(7, 8);
        }
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 7; i++) {
            total += Number(newVat.charAt(i)) * multipliers.common[i];
        }
        // If the number is type 3 then we need to include the trailing A or H in the calculation
        if (typeFormats.third.test(newVat)) {
            // Add in a multiplier for the character A (1*9=9) or H (8*9=72)
            total += (newVat.charAt(8) === 'H') ? 72 : 9;
        }
        // Establish check digit using modulus 23, and translate to char. equivalent.
        total = total % 23;
        total = (total === 0) ? 'W' : String.fromCharCode(total + 64);
        // Compare it with the eighth character of the VAT number. If it's the same, then it's valid.
        var expect = newVat.slice(7, 8);
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [8, 7, 6, 5, 4, 3, 2]
        },
        typeFormats: {
            first: /^\d[A-Z*+]/,
            third: /^\d{7}[A-Z][AH]$/
        },
        regex: [
            /^(IE)(\d{7}[A-W])$/,
            /^(IE)([7-9][A-Z*+)]\d{5}[A-W])$/,
            /^(IE)(\d{7}[A-W][AH])$/
        ]
    }
};
