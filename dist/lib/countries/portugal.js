export const portugal = {
    name: 'Portugal',
    codes: ['PT', 'PRT', '620'],
    calcFn: (vat) => {
        if (!portugal.rules.multipliers)
            return false;
        let total = 0;
        if (!Array.isArray(portugal.rules.multipliers))
            return false;
        // Extract the next digit and multiply by the counter.
        for (let i = 0; i < 8; i++) {
            total += +vat.charAt(i) * portugal.rules.multipliers[i];
        }
        // Establish check digits subtracting modulus 11 from 11.
        total = 11 - total % 11;
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        const expect = Number(vat.slice(8, 9));
        return total === expect;
    },
    rules: {
        multipliers: [9, 8, 7, 6, 5, 4, 3, 2],
        regex: [/^(PT)(\d{9})$/]
    }
};
