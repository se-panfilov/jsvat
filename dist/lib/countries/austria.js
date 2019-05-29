export const austria = {
    name: 'Austria',
    codes: ['AT', 'AUT', '040'],
    calcFn: (vat) => {
        let total = 0;
        for (let i = 0; i < 7; i++) {
            if (!austria.rules.multipliers)
                return false;
            if (!Array.isArray(austria.rules.multipliers))
                return false;
            const temp = Number(vat.charAt(i)) * austria.rules.multipliers[i];
            if (temp > 9) {
                total += Math.floor(temp / 10) + temp % 10;
            }
            else {
                total += temp;
            }
        }
        total = 10 - (total + 4) % 10;
        if (total === 10)
            total = 0;
        return total === Number(vat.slice(7, 8));
    },
    rules: {
        multipliers: [1, 2, 1, 2, 1, 2, 1],
        regex: [/^(AT)U(\d{8})$/]
    }
};
