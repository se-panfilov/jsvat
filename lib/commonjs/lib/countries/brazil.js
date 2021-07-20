"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brazil = void 0;
/**
 * Generate check sums. Multiply numbers to validators and sum them to generate
 * check sums, they're used to check if numbers are valid.
 * @param numbers - Numbers used to generate checkers.
 * @param validators - Validators used to generate checkers.
 */
var generateCheckSums = function (numbers, validators) {
    var initialCheckSums = [0, 0];
    return validators.reduce(function (_a, validator, index) {
        var checkerA = _a[0], checkerB = _a[1];
        return [index === 0 ? 0 : checkerA + numbers[index - 1] * validator, checkerB + numbers[index] * validator];
    }, initialCheckSums);
};
var isRepeatedArray = function (varNumbers) {
    return varNumbers.every(function (varNumber) { return varNumbers[0] === varNumber; });
};
/**
 * Get remaining of 11 or `0` if lower than 2.
 * @param value - Value used remaining.
 */
var getRemaining = function (value) { return (value % 11 < 2 ? 0 : 11 - (value % 11)); };
exports.brazil = {
    name: 'Brazil',
    codes: ['BR', 'BRA', '076'],
    calcFn: function (vat) {
        var numbers = vat.split('').map(Number);
        if (isRepeatedArray(numbers)) {
            return false;
        }
        var validators = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        var checkers = generateCheckSums(numbers, validators);
        return numbers[12] === getRemaining(checkers[0]) && numbers[13] === getRemaining(checkers[1]);
    },
    rules: {
        multipliers: {},
        regex: [/^(BR)?(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/]
    }
};
