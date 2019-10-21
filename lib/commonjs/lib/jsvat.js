"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function removeExtraChars(vat) {
    if (vat === void 0) { vat = ''; }
    return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
}
function getCountry(vat, countriesList) {
    for (var _i = 0, countriesList_1 = countriesList; _i < countriesList_1.length; _i++) {
        var country = countriesList_1[_i];
        var regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
        if (regexpValidRes.isValid)
            return country;
    }
    return undefined;
}
function isVatValidToRegexp(vat, regexArr) {
    for (var _i = 0, regexArr_1 = regexArr; _i < regexArr_1.length; _i++) {
        var regex = regexArr_1[_i];
        var isValid = regex.test(vat);
        if (isValid)
            return { isValid: true, regex: regex };
    }
    return { isValid: false, regex: undefined };
}
function isVatValid(vat, country) {
    var regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
    if (!regexpValidRes.isValid || !regexpValidRes.regex)
        return false;
    var regexResult = regexpValidRes.regex.exec(vat);
    if (!regexResult)
        return false;
    return country.calcFn(regexResult[2]);
}
function checkVAT(vat, countriesList) {
    if (countriesList === void 0) { countriesList = []; }
    if (!vat)
        return makeResult(vat, false);
    var cleanVAT = removeExtraChars(vat);
    var result = makeResult(cleanVAT);
    var country = getCountry(cleanVAT, countriesList);
    if (!country)
        return result;
    var isValid = isVatValid(cleanVAT, country);
    if (isValid)
        return makeResult(cleanVAT, isValid, country);
    return result;
}
exports.checkVAT = checkVAT;
