function makeResult(vat, isValid, country) {
    return {
        value: vat || undefined,
        isValid: Boolean(isValid),
        country: (!country) ? undefined : {
            name: country.name,
            isoCode: {
                short: country.codes[0],
                long: country.codes[1],
                numeric: country.codes[2]
            }
        }
    };
}
function removeExtraChars(vat = '') {
    return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
}
function getCountry(vat, countriesList) {
    for (const country of countriesList) {
        const regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
        if (regexpValidRes.isValid)
            return country;
    }
    return undefined;
}
function isVatValidToRegexp(vat, regexArr) {
    for (const regex of regexArr) {
        const isValid = regex.test(vat);
        if (isValid)
            return { isValid: true, regex: regex };
    }
    return { isValid: false, regex: undefined };
}
function isVatValid(vat, country) {
    const regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
    if (!regexpValidRes.isValid || !regexpValidRes.regex)
        return false;
    const regexResult = regexpValidRes.regex.exec(vat);
    if (!regexResult)
        return false;
    return country.calcFn(regexResult[2]);
}
export function checkVAT(vat, countriesList = []) {
    if (!vat)
        return makeResult(vat, false);
    const cleanVAT = removeExtraChars(vat);
    const result = makeResult(cleanVAT);
    const country = getCountry(cleanVAT, countriesList);
    if (!country)
        return result;
    const isValid = isVatValid(cleanVAT, country);
    if (isValid)
        return makeResult(cleanVAT, isValid, country);
    return result;
}
