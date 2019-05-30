export const bulgaria = {
    name: 'Bulgaria',
    codes: ['BG', 'BGR', '100'],
    calcFn: (vat) => {
        if (vat.length === 9) {
            return _checkNineLengthVat(vat);
        }
        else {
            return _isPhysicalPerson(vat, bulgaria.rules) || _isForeigner(vat, bulgaria.rules) || _miscellaneousVAT(vat, bulgaria.rules);
        }
    },
    rules: {
        multipliers: {
            physical: [2, 4, 8, 5, 10, 9, 7, 3, 6],
            foreigner: [21, 19, 17, 13, 11, 9, 7, 3, 1],
            miscellaneous: [4, 3, 2, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(BG)(\d{9,10})$/]
    }
};
function _increase(value, vat, from, to, incr) {
    let result = value;
    for (let i = from; i < to; i++) {
        result += Number(vat.charAt(i)) * (i + incr);
    }
    return result;
}
function _increase2(value, vat, from, to, multipliers) {
    let result = value;
    for (let i = from; i < to; i++) {
        if (Array.isArray(multipliers)) {
            result += Number(vat.charAt(i)) * multipliers[i];
        }
    }
    return result;
}
function _checkNineLengthVat(vat) {
    let total;
    let temp = 0;
    const expect = +vat.slice(8);
    temp = _increase(temp, vat, 0, 8, 1);
    total = temp % 11;
    if (total !== 10) {
        return total === expect;
    }
    temp = _increase(0, vat, 0, 8, 3);
    total = temp % 11;
    if (total === 10)
        total = 0;
    return total === expect;
}
function _isPhysicalPerson(vat, rules) {
    // 10 digit VAT code - see if it relates to a standard physical person
    if ((/^\d\d[0-5]\d[0-3]\d\d{4}$/).test(vat)) {
        // Check month
        const month = Number(vat.slice(2, 4));
        if ((month > 0 && month < 13) || (month > 20 && month < 33) || (month > 40 && month < 53)) {
            if (!rules.multipliers)
                return false;
            if (Array.isArray(rules.multipliers))
                return false;
            let total = _increase2(0, vat, 0, 9, rules.multipliers.physical);
            // Establish check digit.
            total = total % 11;
            if (total === 10)
                total = 0;
            // Check to see if the check digit given is correct, If not, try next type of person
            if (total === +vat.substr(9, 1))
                return true;
        }
    }
    return false;
}
function _isForeigner(vat, rules) {
    if (!rules.multipliers)
        return false;
    if (Array.isArray(rules.multipliers))
        return false;
    // Extract the next digit and multiply by the counter.
    const total = _increase2(0, vat, 0, 9, rules.multipliers.foreigner);
    // Check to see if the check digit given is correct, If not, try next type of person
    return total % 10 === +vat.substr(9, 1);
}
function _miscellaneousVAT(vat, rules) {
    if (!rules.multipliers)
        return false;
    if (Array.isArray(rules.multipliers))
        return false;
    if (!rules.multipliers.miscellaneous)
        return false;
    // Finally, if not yet identified, see if it conforms to a miscellaneous VAT number
    let total = _increase2(0, vat, 0, 9, rules.multipliers.miscellaneous);
    // Establish check digit.
    total = 11 - total % 11;
    if (total === 10)
        return false;
    if (total === 11)
        total = 0;
    // Check to see if the check digit given is correct, If not, we have an error with the VAT number
    const expect = Number(vat.substr(9, 1));
    return total === expect;
}
