export const romania = {
    name: 'Romania',
    codes: ['RO', 'ROU', '642'],
    calcFn: (vat) => {
        let total = 0;
        // Extract the next digit and multiply by the counter.
        const vatLength = vat.length;
        const multipliers = romania.rules.multipliers.common.slice(10 - vatLength);
        for (let i = 0; i < vat.length - 1; i++) {
            total += Number(vat.charAt(i)) * multipliers[i];
        }
        // Establish check digits by getting modulus 11.
        total = (10 * total) % 11;
        if (total === 10)
            total = 0;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(vat.length - 1, vat.length));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [7, 5, 3, 2, 1, 7, 5, 3, 2]
        },
        regex: [/^(RO)([1-9]\d{1,9})$/]
    }
};
