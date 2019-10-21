"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cyprus = {
    name: 'Cyprus',
    codes: ['CY', 'CYP', '196'],
    calcFn: function (vat) {
        // Not allowed to start with '12'
        if (Number(vat.slice(0, 2)) === 12)
            return false;
        // Extract the next digit and multiply by the counter.
        var total = extractAndMultiplyByCounter(vat, 0);
        // Establish check digit using modulus 26, and translate to char. equivalent.
        total = total % 26;
        total = String.fromCharCode(total + 65);
        // Check to see if the check digit given is correct
        var expect = vat.substr(8, 1);
        return total === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(CY)([0-59]\d{7}[A-Z])$/]
    }
};
function extractAndMultiplyByCounter(vat, total) {
    var result = total;
    for (var i = 0; i < 8; i++) {
        var temp = Number(vat.charAt(i));
        if (i % 2 === 0) {
            switch (temp) {
                case 0:
                    temp = 1;
                    break;
                case 1:
                    temp = 0;
                    break;
                case 2:
                    temp = 5;
                    break;
                case 3:
                    temp = 7;
                    break;
                case 4:
                    temp = 9;
                    break;
                default:
                    temp = temp * 2 + 3;
            }
        }
        result += temp;
    }
    return result;
}
