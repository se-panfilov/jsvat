export const belgium = {
    name: 'Belgium',
    codes: ['BE', 'BEL', '056'],
    calcFn: (vat) => {
        const newVat = vat.length === 9 ? '0' + vat : vat;
        if (Number(newVat.slice(1, 2)) === 0)
            return false;
        const check = 97 - (Number(newVat.slice(0, 8)) % 97);
        return check === Number(newVat.slice(8, 10));
    },
    rules: {
        multipliers: {},
        regex: [/^(BE)(0?\d{9})$/]
    }
};
