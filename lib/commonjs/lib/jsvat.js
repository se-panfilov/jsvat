"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkVAT = void 0;
var countries_1 = require("./countries");
function makeResult(vat, isValid, country) {
    return {
        value: vat || undefined,
        isValid: Boolean(isValid),
        isValidFormat: country ? isVatValidToRegexp(vat, country.rules.regex).isValid : false,
        isSupportedCountry: Boolean(country),
        country: !country
            ? undefined
            : {
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
    return vat
        .toString()
        .toUpperCase()
        .replace(/(\s|-|\.|\/)+/g, '');
}
function getCountryCodes(country) {
    return __spreadArray(__spreadArray([], country.codes), [country.name === 'Greece' ? 'EL' : undefined]).filter(Boolean);
}
var countriesVATDoesNotStartWithCountryCode = [countries_1.brazil.name];
function isVATStartWithCountryCode(countryName) {
    return !countriesVATDoesNotStartWithCountryCode.includes(countryName);
}
function isVATStartWithNumber(vat) {
    return !!vat.match(/^\d{2}/);
}
function getCountry(vat, countriesList) {
    for (var _i = 0, countriesList_1 = countriesList; _i < countriesList_1.length; _i++) {
        var country = countriesList_1[_i];
        if (startsWithCode(vat, country) || (!isVATStartWithCountryCode(country.name) && isVATStartWithNumber(vat))) {
            return __assign({}, country);
        }
    }
    return undefined;
}
function startsWithCode(vat, country) {
    var countryCodes = getCountryCodes(country);
    return countryCodes.filter(function (code) { return vat.startsWith(code); }).length > 0;
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
    var country = getCountry(cleanVAT, countriesList);
    var isValid = country ? isVatValid(cleanVAT, country) : false;
    return makeResult(cleanVAT, isValid, country);
}
exports.checkVAT = checkVAT;
