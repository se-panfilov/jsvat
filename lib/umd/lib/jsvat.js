(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
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
                },
                formatValid: country.formatValid,
            }
        };
    }
    function removeExtraChars(vat = '') {
        return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
    }
    function getCountryCode(country) {
        if (country.name === 'Greece') {
            return 'EL';
        }
        else {
            return country.codes[0];
        }
    }
    function getCountry(vat, countriesList) {
        for (const country of countriesList) {
            const countryCode = getCountryCode(country);
            if (vat.startsWith(countryCode)) {
                const formatValid = isVatValidToRegexp(vat, country.rules.regex);
                return {
                    ...country,
                    formatValid: formatValid.isValid
                };
            }
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
    function checkVAT(vat, countriesList = []) {
        if (!vat)
            return makeResult(vat, false);
        const cleanVAT = removeExtraChars(vat);
        const result = makeResult(cleanVAT);
        const country = getCountry(cleanVAT, countriesList);
        if (!country)
            return result;
        if (!country.formatValid)
            return makeResult(cleanVAT, country.formatValid, country);
        const isValid = isVatValid(cleanVAT, country);
        if (isValid)
            return makeResult(cleanVAT, isValid, country);
        return result;
    }
    exports.checkVAT = checkVAT;
});
