export const belgium = {
    name: 'Belgium',
    codes: ['BE', 'BEL', '056'],
    calcFn: (vat) => {
        if (vat.length === 9) {
            vat = '0' + vat;
        }
        if (Number(vat.slice(1, 2)) === 0)
            return false;
        const check = (97 - Number(vat.slice(0, 8)) % 97);
        return check === Number(vat.slice(8, 10));
    },
    rules: {
        regex: [/^(BE)(0?\d{9})$/]
    }
};
