/**
 * Generate check sums. Multiply numbers to validators and sum them to generate
 * check sums, they're used to check if numbers are valid.
 * @param numbers - Numbers used to generate checkers.
 * @param validators - Validators used to generate checkers.
 */
const generateCheckSums = (numbers, validators) => {
    const initialCheckSums = [0, 0];
    return validators.reduce(([checkerA, checkerB], validator, index) => [index === 0 ? 0 : checkerA + numbers[index - 1] * validator, checkerB + numbers[index] * validator], initialCheckSums);
};
const isRepeatedArray = (varNumbers) => varNumbers.every((varNumber) => varNumbers[0] === varNumber);
/**
 * Get remaining of 11 or `0` if lower than 2.
 * @param value - Value used remaining.
 */
const getRemaining = (value) => (value % 11 < 2 ? 0 : 11 - (value % 11));
export const brazil = {
    name: 'Brazil',
    codes: ['BR', 'BRA', '076'],
    calcFn: (vat) => {
        const numbers = vat.split('').map(Number);
        if (isRepeatedArray(numbers)) {
            return false;
        }
        const validators = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const checkers = generateCheckSums(numbers, validators);
        return numbers[12] === getRemaining(checkers[0]) && numbers[13] === getRemaining(checkers[1]);
    },
    rules: {
        multipliers: {},
        regex: [/^(BR)?(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/]
    }
};
