export const spain = {
    name: 'Spain',
    codes: ['ES', 'ESP', '724'],
    calcFn: (vat) => {
        if (!spain.rules.multipliers)
            return false;
        if (!spain.rules.additional)
            return false;
        // National juridical entities
        if (spain.rules.additional[0].test(vat))
            return isNationalJuridicalEntities(vat);
        // Juridical entities other than national ones
        if (spain.rules.additional[1].test(vat))
            return isNonNationalJuridical(vat);
        // Personal number (NIF) (starting with numeric of Y or Z)
        if (spain.rules.additional[2].test(vat))
            return isPersonalYtoZ(vat);
        // Personal number (NIF) (starting with K, L, M, or X)
        if (spain.rules.additional[3].test(vat))
            return isPersonalKtoX(vat);
        return false;
    },
    rules: {
        multipliers: [2, 1, 2, 1, 2, 1, 2],
        regex: [
            /^(ES)([A-Z]\d{8})$/,
            /^(ES)([A-HN-SW]\d{7}[A-J])$/,
            /^(ES)([0-9YZ]\d{7}[A-Z])$/,
            /^(ES)([KLMX]\d{7}[A-Z])$/
        ],
        additional: [
            /^[A-H|J|U|V]\d{8}$/,
            /^[A-H|N-S|W]\d{7}[A-J]$/,
            /^[0-9|Y|Z]\d{7}[A-Z]$/,
            /^[K|L|M|X]\d{7}[A-Z]$/
        ]
    }
};
function isNationalJuridicalEntities(vat) {
    let temp;
    let total = 0;
    if (!Array.isArray(spain.rules.multipliers))
        return false;
    // Extract the next digit and multiply by the counter.
    for (let i = 0; i < 7; i++) {
        temp = Number(vat.charAt(i + 1)) * spain.rules.multipliers[i];
        if (temp > 9) {
            total += Math.floor(temp / 10) + temp % 10;
        }
        else {
            total += temp;
        }
    }
    // Now calculate the check digit itself.
    total = 10 - total % 10;
    if (total === 10) {
        total = 0;
    }
    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    const expect = Number(vat.slice(8, 9));
    return total === expect;
}
function isNonNationalJuridical(vat) {
    let temp;
    let total = 0;
    if (!Array.isArray(spain.rules.multipliers))
        return false;
    // Extract the next digit and multiply by the counter.
    for (let i = 0; i < 7; i++) {
        temp = Number(vat.charAt(i + 1)) * spain.rules.multipliers[i];
        if (temp > 9) {
            total += Math.floor(temp / 10) + temp % 10;
        }
        else {
            total += temp;
        }
    }
    // Now calculate the check digit itself.
    total = 10 - total % 10;
    total = String.fromCharCode(total + 64);
    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    const expect = vat.slice(8, 9);
    return total === expect;
}
function isPersonalYtoZ(vat) {
    let tempNumber = vat;
    if (tempNumber.substring(0, 1) === 'Y')
        tempNumber = tempNumber.replace(/Y/, '1');
    if (tempNumber.substring(0, 1) === 'Z')
        tempNumber = tempNumber.replace(/Z/, '2');
    const expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempNumber.substring(0, 8) % 23);
    return tempNumber.charAt(8) === expect;
}
function isPersonalKtoX(vat) {
    const expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(Number(vat.substring(1, 8)) % 23);
    return vat.charAt(8) === expect;
}
