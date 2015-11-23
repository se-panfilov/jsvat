angular.module('jsvat', [])
    .factory('VatCheckerFactory', function () {
var VatChecker = (function () {
    'use strict';

    var _REGEXP = {
        austria: /^(AT)U(\d{8})$/,
        belgium: /^(BE)(0?\d{9})$/,
        bulgaria: /^(BG)(\d{9,10})$/,
        switzerland: /^(CHE)(\d{9})(MWST)?$/,
        cyprus: /^(CY)([0-59]\d{7}[A-Z])$/,
        czech_republic: /^(CZ)(\d{8,10})(\d{3})?$/,
        germany: /^(DE)([1-9]\d{8})$/,
        denmark: /^(DK)(\d{8})$/,
        estonia: /^(EE)(10\d{7})$/,
        greece: /^(EL)(\d{9})$/,
        spain_national: /^(ES)([A-Z]\d{8})$/,
        spain_other: /^(ES)([A-HN-SW]\d{7}[A-J])$/,
        spain_personal_1: /^(ES)([0-9YZ]\d{7}[A-Z])$/,
        spain_personal_2: /^(ES)([KLMX]\d{7}[A-Z])$/,
        eu_type: /^(EU)(\d{9})$/,
        finland: /^(FI)(\d{8})$/,
        france_1: /^(FR)(\d{11})$/,
        france_2: /^(FR)([A-HJ-NP-Z]\d{10})$/,
        france_3: /^(FR)(\d[A-HJ-NP-Z]\d{9})$/,
        france_4: /^(FR)([A-HJ-NP-Z]{2}\d{9})$/,
        uk_standard: /^(GB)?(\d{9})$/,
        uk_branches: /^(GB)?(\d{12})$/,
        uk_government: /^(GB)?(GD\d{3})$/,
        uk_health_authority: /^(GB)?(HA\d{3})$/,
        croatia: /^(HR)(\d{11})$/,
        hungary: /^(HU)(\d{8})$/,
        ireland_1: /^(IE)(\d{7}[A-W])$/,
        ireland_2: /^(IE)([7-9][A-Z\*\+)]\d{5}[A-W])$/,
        ireland_3: /^(IE)(\d{7}[A-W][AH])$/,
        italy: /^(IT)(\d{11})$/,
        latvia: /^(LV)(\d{11})$/,
        lithunia: /^(LT)(\d{9}|\d{12})$/,
        luxembourg: /^(LU)(\d{8})$/,
        malta: /^(MT)([1-9]\d{7})$/,
        netherlands: /^(NL)(\d{9})B\d{2}$/,
        norway_not_EU: /^(NO)(\d{9})$/,
        poland: /^(PL)(\d{10})$/,
        portugal: /^(PT)(\d{9})$/,
        romania: /^(RO)([1-9]\d{1,9})$/,
        russia: /^(RU)(\d{10}|\d{12})$/,
        serbia: /^(RS)(\d{9})$/,
        slovenia: /^(SI)([1-9]\d{7})$/,
        slovakia_republic: /^(SK)([1-9]\d[2346-9]\d{7})$/,
        sweden: /^(SE)(\d{10}01)$/
    };

    var exports = {
        checkVatNum: function (number) {
            if (!number) return false;
            var defCCode = "GB";

            var vatNum = number.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
            var isValid = false;


            for (var k in _REGEXP) {
                if (_REGEXP.hasOwnProperty(k)) {

                    var isMatch = _REGEXP[k].test(vatNum);

                    if (isMatch) {
                        //TODO (S.Panfilov) todo and exec should do the same, but they didn't
                        var parsedNum = _REGEXP[k].exec(vatNum);

                        var cCode = parsedNum[1];
                        var cNumber = parsedNum[2];
                        if (!cCode || cCode.length === 0) cCode = defCCode;

                        //TODO (S.Panfilov) refactor it (should call by key from regexp)
                        var checkDigitFunc = _checks[cCode.toLowerCase()];
                        isValid = checkDigitFunc(cNumber);
                        //TODO (S.Panfilov) debug
                        //isValid = true;

                        break;
                    }
                }
            }

            return isValid;
        }
    };

    var _checks = {
        at: function (vatNum) {
            var total = 0;
            var multipliers = [1, 2, 1, 2, 1, 2, 1];
            var temp = 0;
            var expect;

            for (var i = 0; i < 7; i++) {
                temp = +vatNum.charAt(i) * multipliers[i];
                if (temp > 9)
                    total += Math.floor(temp / 10) + temp % 10;
                else
                    total += temp;
            }

            total = 10 - (total + 4) % 10;
            if (total === 10) total = 0;

            expect = +vatNum.slice(7, 8);

            return total === expect;
        },
        be: function (vatNum) {
            var expect;
            var check;
            if (vatNum.length === 9) vatNum = "0" + vatNum;
            if (+vatNum.slice(1, 2) === 0) return false;

            check = +(97 - +vatNum.slice(0, 8) % 97);
            expect = +vatNum.slice(8, 10);
            return check === expect;
        },

        bg: function (vatNum) {
            var expect;
            var multipliers;
            var temp = 0;
            var total = 0;

            if (vatNum.length === 9) {

                temp = 0;
                for (var i = 0; i < 8; i++) {
                    temp += +vatNum.charAt(i) * (i + 1);
                }
                total = temp % 11;
                if (total !== 10) {
                    expect = +vatNum.slice(8);
                    return total === expect;
                }

                temp = 0;
                for (var j = 0; j < 8; j++) {
                    temp += +vatNum.charAt(j) * (j + 3);
                }

                total = temp % 11;
                if (total === 10) total = 0;
                expect = +vatNum.slice(8);
                return total === expect;
            }

            // 10 digit VAT code - see if it relates to a standard physical person
            if ((/^\d\d[0-5]\d[0-3]\d\d{4}$/).test(vatNum)) {

                // Check month
                var month = +vatNum.slice(2, 4);
                if ((month > 0 && month < 13) || (month > 20 && month < 33) || (month > 40 && month < 53)) {

                    // Extract the next digit and multiply by the counter.
                    multipliers = [2, 4, 8, 5, 10, 9, 7, 3, 6];
                    total = 0;
                    for (var k = 0; k < 9; k++) {
                        total += +vatNum.charAt(k) * multipliers[k];
                    }

                    // Establish check digit.
                    total = total % 11;
                    if (total === 10) total = 0;

                    // Check to see if the check digit given is correct, If not, try next type of person
                    if (total === +vatNum.substr(9, 1)) return true;
                }
            }

            // It doesn't relate to a standard physical person - see if it relates to a foreigner.

            // Extract the next digit and multiply by the counter.
            multipliers = [21, 19, 17, 13, 11, 9, 7, 3, 1];
            total = 0;
            for (var l = 0; l < 9; l++) {
                total += +vatNum.charAt(l) * multipliers[l];
            }

            // Check to see if the check digit given is correct, If not, try next type of person
            if (total % 10 === +vatNum.substr(9, 1)) {
                return true;
            }

            // Finally, if not yet identified, see if it conforms to a miscellaneous VAT number

            // Extract the next digit and multiply by the counter.
            multipliers = [4, 3, 2, 7, 6, 5, 4, 3, 2];
            total = 0;
            for (var m = 0; m < 9; m++) {
                total += +vatNum.charAt(m) * multipliers[m];
            }

            // Establish check digit.
            total = 11 - total % 11;
            if (total === 10) return false;
            if (total === 11) total = 0;

            // Check to see if the check digit given is correct, If not, we have an error with the VAT number
            expect = +vatNum.substr(9, 1);
            return total === expect;
        },

        che: function (vatNum) {
            var expect;

            // Checks the check digits of a Swiss VAT number.

            // Extract the next digit and multiply by the counter.
            var multipliers = [5, 4, 3, 2, 7, 6, 5, 4];
            var total = 0;
            for (var i = 0; i < 8; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digit.
            total = 11 - total % 11;
            if (total === 10) return false;
            if (total === 11) total = 0;

            // Check to see if the check digit given is correct, If not, we have an error with the VAT number
            expect = +vatNum.substr(8, 1);
            return total === expect;
        },

        cy: function (vatNum) {
            var expect;

            // Checks the check digits of a Cypriot VAT number.

            // Not allowed to start with '12'
            if (+vatNum.slice(0, 2) === 12) return false;

            // Extract the next digit and multiply by the counter.
            var total = 0;
            for (var i = 0; i < 8; i++) {
                var temp = +vatNum.charAt(i);
                if (i % 2 === 0) {
                    switch (temp) {
                        case 0:
                            temp = 1;
                            break;
                        case 1:
                            temp = 0;
                            break;
                        case 2:
                            temp = 5;
                            break;
                        case 3:
                            temp = 7;
                            break;
                        case 4:
                            temp = 9;
                            break;
                        default:
                            temp = temp * 2 + 3;
                    }
                }
                total += temp;
            }

            // Establish check digit using modulus 26, and translate to char. equivalent.
            total = total % 26;
            total = String.fromCharCode(total + 65);

            // Check to see if the check digit given is correct
            expect = vatNum.substr(8, 1);
            return total === expect;
        },

        cz: function (vatNum) {
            var expect;

            // Checks the check digits of a Czech Republic VAT number.

            var total = 0;
            var multipliers = [8, 7, 6, 5, 4, 3, 2];

            var czExp = [];
            czExp[0] = (/^\d{8}$/);
            czExp[1] = (/^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/);
            czExp[2] = (/^6\d{8}$/);
            czExp[3] = (/^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/);

            // Legal entities
            if (czExp[0].test(vatNum)) {

                // Extract the next digit and multiply by the counter.
                for (var i = 0; i < 7; i++) {
                    total += +vatNum.charAt(i) * multipliers[i];
                }

                // Establish check digit.
                total = 11 - total % 11;
                if (total === 10) total = 0;
                if (total === 11) total = 1;

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                expect = +vatNum.slice(7, 8);
                return total === expect;
            }

            // Individuals type 1
            else if (czExp[1].test(vatNum)) {
                if (temp = +vatNum.slice(0, 2) > 53) return false;
                return true;
            }

            // Individuals type 2
            else if (czExp[2].test(vatNum)) {

                // Extract the next digit and multiply by the counter.
                for (var j = 0; j < 7; j++) {
                    total += +vatNum.charAt(j + 1) * multipliers[j];
                }

                // Establish check digit.
                total = 11 - total % 11;
                if (total === 10) total = 0;
                if (total === 11) total = 1;

                // Convert calculated check digit according to a lookup table;
                var lookup = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10];
                expect = +vatNum.slice(8, 9);
                return lookup[total - 1] === expect;
            }

            // Individuals type 3
            else if (czExp[3].test(vatNum)) {
                var temp = +vatNum.slice(0, 2) + +vatNum.slice(2, 4) + +vatNum.slice(4, 6) + +vatNum.slice(6, 8) + +vatNum.slice(8);
                expect = +vatNum % 11 === 0;
                return !!(temp % 11 === 0 && expect);
            }

            // else error
            return false;
        },

        de: function (vatNum) {
            var expect;

            // Checks the check digits of a German VAT number.

            var product = 10;
            var sum = 0;
            var checkDigit = 0;
            for (var i = 0; i < 8; i++) {

                // Extract the next digit and implement peculiar algorithm!.
                sum = (+vatNum.charAt(i) + product) % 10;
                if (sum === 0) {
                    sum = 10
                }
                product = (2 * sum) % 11;
            }

            // Establish check digit.
            if (11 - product === 10) {
                checkDigit = 0
            } else {
                checkDigit = 11 - product
            }

            // Compare it with the last two characters of the VAT number. If the same, then it is a valid
            // check digit.
            expect = +vatNum.slice(8, 9);
            return checkDigit === expect;
        },

        dk: function (vatNum) {
            var expect = 0;

            // Checks the check digits of a Danish VAT number.

            var total = 0;
            var multipliers = [2, 7, 6, 5, 4, 3, 2, 1];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digit.
            total = total % 11;

            // The remainder should be 0 for it to be valid..
            return total === expect;
        },

        ee: function (vatNum) {
            var expect;

            // Checks the check digits of an Estonian VAT number.

            var total = 0;
            var multipliers = [3, 7, 1, 3, 7, 1, 3, 7];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digits using modulus 10.
            total = 10 - total % 10;
            if (total === 10) total = 0;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(8, 9);
            return total === expect;
        },

        el: function (vatNum) {
            var expect;

            // Checks the check digits of a Greek VAT number.

            var total = 0;
            var multipliers = [256, 128, 64, 32, 16, 8, 4, 2];

            //eight character numbers should be prefixed with an 0.
            if (vatNum.length === 8) {
                vatNum = "0" + vatNum
            }

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digit.
            total = total % 11;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(8, 9);
            return total === expect;
        },

        es: function (vatNum) {
            var expect;

            // Checks the check digits of a Spanish VAT number.

            var total = 0;
            var temp = 0;
            var multipliers = [2, 1, 2, 1, 2, 1, 2];
            var esExp = [];
            esExp[0] = (/^[A-H|J|U|V]\d{8}$/);
            esExp[1] = (/^[A-H|N-S|W]\d{7}[A-J]$/);
            esExp[2] = (/^[0-9|Y|Z]\d{7}[A-Z]$/);
            esExp[3] = (/^[K|L|M|X]\d{7}[A-Z]$/);
            var i = 0;

            // National juridical entities
            if (esExp[0].test(vatNum)) {

                // Extract the next digit and multiply by the counter.
                for (i = 0; i < 7; i++) {
                    temp = vatNum.charAt(i + 1) * multipliers[i];
                    if (temp > 9)
                        total += Math.floor(temp / 10) + temp % 10;
                    else
                        total += temp;
                }
                // Now calculate the check digit itself.
                total = 10 - total % 10;
                if (total === 10) {
                    total = 0;
                }

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                expect = +vatNum.slice(8, 9);
                return total === expect;
            }

            // Juridical entities other than national ones
            else if (esExp[1].test(vatNum)) {

                // Extract the next digit and multiply by the counter.
                for (i = 0; i < 7; i++) {
                    temp = vatNum.charAt(i + 1) * multipliers[i];
                    if (temp > 9)
                        total += Math.floor(temp / 10) + temp % 10;
                    else
                        total += temp;
                }

                // Now calculate the check digit itself.
                total = 10 - total % 10;
                total = String.fromCharCode(total + 64);

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                expect = vatNum.slice(8, 9);
                return total === expect;
            }

            // Personal number (NIF) (starting with numeric of Y or Z)
            else if (esExp[2].test(vatNum)) {
                var tempnumber = vatNum;
                if (tempnumber.substring(0, 1) === 'Y') tempnumber = tempnumber.replace(/Y/, "1");
                if (tempnumber.substring(0, 1) === 'Z') tempnumber = tempnumber.replace(/Z/, "2");
                expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempnumber.substring(0, 8) % 23);
                return tempnumber.charAt(8) === expect;
            }

            // Personal number (NIF) (starting with K, L, M, or X)
            else if (esExp[3].test(vatNum)) {
                expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+vatNum.substring(1, 8) % 23);
                return vatNum.charAt(8) === expect;
            }

            else return false;
        },

        eu: function () {

            // We know little about EU numbers apart from the fact that the first 3 digits represent the
            // country, and that there are nine digits in total.
            return true;
        },

        fi: function (vatNum) {
            var expect;

            // Checks the check digits of a Finnish VAT number.

            var total = 0;
            var multipliers = [7, 9, 10, 5, 8, 4, 2];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 7; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digit.
            total = 11 - total % 11;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(7, 8);
            return total === expect;
        },

        fr: function (vatNum) {
            var expect;

            // Checks the check digits of a French VAT number.

            if (!(/^\d{11}$/).test(vatNum)) {
                return true;
            }

            // Extract the last nine digits as an integer.
            var total = +vatNum.substring(2);

            // Establish check digit.
            total = (total * 100 + 12) % 97;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(0, 2);
            return total === expect;
        },

        gb: function (vatNum) {
            var expect;

            // Checks the check digits of a UK VAT number.

            var multipliers = [8, 7, 6, 5, 4, 3, 2];

            // Government departments
            if (vatNum.substr(0, 2) === 'GD') {
                expect = 500;
                return vatNum.substr(2, 3) < expect;
            }

            // Health authorities
            if (vatNum.substr(0, 2) === 'HA') {
                expect = 499;
                return vatNum.substr(2, 3) > expect;
            }

            // Standard and commercial numbers
            var total = 0;

            // 0 VAT numbers disallowed!
            if (+vatNum.slice(0) === 0) return false;

            // Check range is OK for modulus 97 calculation
            var no = +vatNum.slice(0, 7);

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 7; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Old numbers use a simple 97 modulus, but new numbers use an adaptation of that (less 55). Our
            // VAT number could use either system, so we check it against both.

            // Establish check digits by subtracting 97 from total until negative.
            var checkDigit = total;
            while (checkDigit > 0) {
                checkDigit = checkDigit - 97;
            }

            // Get the absolute value and compare it with the last two characters of the VAT number. If the
            // same, then it is a valid traditional check digit. However, even then the number must fit within
            // certain specified ranges.
            checkDigit = Math.abs(checkDigit);
            if (checkDigit === +vatNum.slice(7, 9) && no < 9990001 && (no < 100000 || no > 999999) && (no < 9490001 || no > 9700000)) return true;

            // Now try the new method by subtracting 55 from the check digit if we can - else add 42
            if (checkDigit >= 55)
                checkDigit = checkDigit - 55;
            else
                checkDigit = checkDigit + 42;
            expect = +vatNum.slice(7, 9);
            return !!(checkDigit === expect && no > 1000000);
        },

        hr: function (vatNum) {
            var expect;

            // Checks the check digits of a Croatian VAT number using ISO 7064, MOD 11-10 for check digit.

            var product = 10;
            var sum = 0;

            for (var i = 0; i < 10; i++) {

                // Extract the next digit and implement the algorithm
                sum = (+vatNum.charAt(i) + product) % 10;
                if (sum === 0) {
                    sum = 10
                }

                product = (2 * sum) % 11;
            }

            // Now check that we have the right check digit
            expect = +vatNum.slice(10, 11);
            return (product + expect) % 10 === 1;
        },

        hu: function (vatNum) {
            var expect;

            // Checks the check digits of a Hungarian VAT number.

            var total = 0;
            var multipliers = [9, 7, 3, 1, 9, 7, 3];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 7; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digit.
            total = 10 - total % 10;
            if (total === 10) total = 0;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(7, 8);
            return total === expect;
        },

        ie: function (vatNum) {
            var expect;

            // Checks the check digits of an Irish VAT number.

            var total = 0;
            var multipliers = [8, 7, 6, 5, 4, 3, 2];

            // If the code is type 1 format, we need to convert it to the new before performing the validation.
        if (/^\d[A-Z\*\+]/.test(vatNum)) {
            vatNum = "0" + vatNum.substring(2, 7) + vatNum.substring(0, 1) + vatNum.substring(7, 8);
        }

            // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 7; i++) {
            total += +vatNum.charAt(i) * multipliers[i];
        }

            // If the number is type 3 then we need to include the trailing A or H in the calculation
            if (/^\d{7}[A-Z][AH]$/.test(vatNum)) {
                // Add in a multiplier for the character A (1*9=9) or H (8*9=72)
            if (vatNum.charAt(8) === 'H') {
                    total += 72;
            } else {
                    total += 9;
            }
        }

            // Establish check digit using modulus 23, and translate to char. equivalent.
            total = total % 23;
        if (total === 0) {
                total = "W";
        } else {
                total = String.fromCharCode(total + 64);
        }

            // Compare it with the eighth character of the VAT number. If it's the same, then it's valid.
            expect = vatNum.slice(7, 8);
            return total === expect;
        },

        it: function (vatNum) {
            var expect;

            // Checks the check digits of an Italian VAT number.

            var total = 0;
            var multipliers = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
            var temp;

            // The last three digits are the issuing office, and cannot exceed more 201, unless 999 or 888
            if (+vatNum.slice(0, 7) === 0) {
                return false;
            }

            temp = +vatNum.slice(7, 10);
            if ((temp < 1) || (temp > 201) && temp !== 999 && temp !== 888) {
                return false;
            }

            // Extract the next digit and multiply by the appropriate
            for (var i = 0; i < 10; i++) {
                temp = +vatNum.charAt(i) * multipliers[i];
                if (temp > 9)
                    total += Math.floor(temp / 10) + temp % 10;
                else
                    total += temp;
            }

            // Establish check digit.
            total = 10 - total % 10;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(10, 11);
            return total === expect;
        },

        lt: function (vatNum) {
            var total;
            var multipliers;
            var expect;

            // Checks the check digits of a Lithuanian VAT number.

            // 9 character VAT numbers are for legal persons
            if (vatNum.length === 9) {

                // 8th character must be one
                if (!(/^\d{7}1/).test(vatNum)) return false;

                // Extract the next digit and multiply by the counter+1.
                total = 0;
                for (var i = 0; i < 8; i++) {
                    total += +vatNum.charAt(i) * (i + 1);
                }

                // Can have a double check digit calculation!
                if (total % 11 === 10) {
                    multipliers = [3, 4, 5, 6, 7, 8, 9, 1];
                    total = 0;
                    for (var j = 0; j < 8; j++) {
                        total += +vatNum.charAt(j) * multipliers[j];
                    }
                }

                // Establish check digit.
                total = total % 11;
                if (total === 10) {
                    total = 0;
                }

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                expect = +vatNum.slice(8, 9);
                return total === expect;
            }

            // 12 character VAT numbers are for temporarily registered taxpayers
            else {

                // 11th character must be one
                if (!(/^\d{10}1/).test(vatNum)) return false;

                // Extract the next digit and multiply by the counter+1.
                total = 0;
                multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
                for (var k = 0; k < 11; k++) {
                    total += +vatNum.charAt(k) * multipliers[k];
                }

                // Can have a double check digit calculation!
                if (total % 11 === 10) {
                    multipliers = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4];
                    total = 0;
                    for (var l = 0; l < 11; l++) {
                        total += +vatNum.charAt(l) * multipliers[l];
                    }
                }

                // Establish check digit.
                total = total % 11;
                if (total === 10) {
                    total = 0;
                }

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                expect = +vatNum.slice(11, 12);
                return total === expect;
            }
        },

        lu: function (vatNum) {
            var expect = +vatNum.slice(6, 8);
            var checkDigit = +vatNum.slice(0, 6) % 89;
            // Checks the check digits of a Luxembourg VAT number.

            return checkDigit === expect;
        },

        lv: function (vatNum) {
            var expect;

            // Checks the check digits of a Latvian VAT number.

            // Differentiate between legal entities and natural bodies. For the latter we simply check that
            // the first six digits correspond to valid DDMMYY dates.
            if ((/^[0-3]/).test(vatNum)) {
                return !!(/^[0-3][0-9][0-1][0-9]/).test(vatNum);
            } else {

                var total = 0;
                var multipliers = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6];

                // Extract the next digit and multiply by the counter.
                for (var i = 0; i < 10; i++) total += +vatNum.charAt(i) * multipliers[i];

                // Establish check digits by getting modulus 11.
                if (total % 11 === 4 && vatNum[0] === 9) total = total - 45;
                if (total % 11 === 4)
                    total = 4 - total % 11;
                else if (total % 11 > 4)
                    total = 14 - total % 11;
                else if (total % 11 < 4)
                    total = 3 - total % 11;

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                expect = +vatNum.slice(10, 11);
                return total === expect;
            }
        },

        mt: function (vatNum) {
            var expect;

            // Checks the check digits of a Maltese VAT number.

            var total = 0;
            var multipliers = [3, 4, 6, 7, 8, 9];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 6; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digits by getting modulus 37.
            total = 37 - total % 37;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(6, 8);
            return total === expect;
        },

        nl: function (vatNum) {
            var expect;

            // Checks the check digits of a Dutch VAT number.

            var total = 0;
            var multipliers = [9, 8, 7, 6, 5, 4, 3, 2];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digits by getting modulus 11.
            total = total % 11;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(8, 9);
            return total === expect;
        },

        no: function (vatNum) {
            var expect;

            // Checks the check digits of a Norwegian VAT number.
            // See http://www.brreg.no/english/coordination/number.html

            var total = 0;
            var multipliers = [3, 2, 7, 6, 5, 4, 3, 2];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digits by getting modulus 11. Check digits > 9 are invalid
            total = 11 - total % 11;
            if (total === 11) {
                total = 0;
            }
            if (total < 10) {

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                expect = +vatNum.slice(8, 9);
                return total === expect;
            }
        },

        pl: function (vatNum) {
            var expect;

            // Checks the check digits of a Polish VAT number.

            var total = 0;
            var multipliers = [6, 5, 7, 2, 3, 4, 5, 6, 7];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 9; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digits subtracting modulus 11 from 11.
            total = total % 11;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(9, 10);
            return total === expect;
        },

        pt: function (vatNum) {
            var expect;

            // Checks the check digits of a Portugese VAT number.

            var total = 0;
            var multipliers = [9, 8, 7, 6, 5, 4, 3, 2];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digits subtracting modulus 11 from 11.
            total = 11 - total % 11;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(8, 9);
            return total === expect;
        },

        ro: function (vatNum) {
            var expect;

            // Checks the check digits of a Romanian VAT number.

            var multipliers = [7, 5, 3, 2, 1, 7, 5, 3, 2];

            // Extract the next digit and multiply by the counter.
            var vatLength = vatNum.length;
            multipliers = multipliers.slice(10 - vatLength);
            var total = 0;
            for (var i = 0; i < vatNum.length - 1; i++) {
                total += +vatNum.charAt(i) * multipliers[i];
            }

            // Establish check digits by getting modulus 11.
            total = (10 * total) % 11;
            if (total === 10) total = 0;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(vatNum.length - 1, vatNum.length);
            return total === expect;
        },

        rs: function (vatNum) {
            var expect;

            // Checks the check digits of a Serbian VAT number using ISO 7064, MOD 11-10 for check digit.

            var product = 10;
            var sum = 0;
            var checkDigit;

            for (var i = 0; i < 8; i++) {

                // Extract the next digit and implement the algorithm
                sum = (+vatNum.charAt(i) + product) % 10;
                if (sum === 0) {
                    sum = 10
                }
                product = (2 * sum) % 11;
            }

            // Now check that we have the right check digit
            expect = 1;
            checkDigit = (product + +vatNum.slice(8, 9)) % 10;
            return checkDigit === expect;
        },

        ru: function (vatNum) {
            var expect;
            var expect2;

            // Checks the check digits of a Russian INN number
            // See http://russianpartner.biz/test_inn.html for algorithm

            // 10 digit INN numbers
            if (vatNum.length === 10) {
                var total = 0;
                var multipliers = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                for (var i = 0; i < 10; i++) {
                    total += +vatNum.charAt(i) * multipliers[i];
                }

                total = total % 11;
                if (total > 9) {
                    total = total % 10
                }

                // Compare it with the last character of the VAT number. If it is the same, then it's valid
                expect = +vatNum.slice(9, 10);
                return total === expect;

                // 12 digit INN numbers
            } else if (vatNum.length === 12) {
                var total1 = 0;
                var multipliers1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                var total2 = 0;
                var multipliers2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];

                for (var j = 0; j < 11; j++) {
                    total1 += +vatNum.charAt(j) * multipliers1[j];
                }

                total1 = total1 % 11;
                if (total1 > 9) {
                    total1 = total1 % 10
                }

                for (var k = 0; k < 11; k++) {
                    total2 += +vatNum.charAt(k) * multipliers2[k];
                }

                total2 = total2 % 11;
                if (total2 > 9) {
                    total2 = total2 % 10
                }

                // Compare the first check with the 11th character and the second check with the 12th and last
                // character of the VAT number. If they're both the same, then it's valid
                expect = +vatNum.slice(10, 11);
                expect2 = +vatNum.slice(11, 12);
                return (expect) && (expect2);
            }
        },

        se: function (vatNum) {
            var expect;

            // Calculate R where R = R1 + R3 + R5 + R7 + R9, and Ri = INT(Ci/5) + (Ci*2) modulo 10
            var R = 0;
            var digit;
            for (var i = 0; i < 9; i = i + 2) {
                digit = +vatNum.charAt(i);
                R += Math.floor(digit / 5) + ((digit * 2) % 10);
            }

            // Calculate S where S = C2 + C4 + C6 + C8
            var S = 0;
            for (var j = 1; j < 9; j = j + 2) {
                S += +vatNum.charAt(j);
            }

            var checkDigit = (10 - (R + S) % 10) % 10;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            expect = +vatNum.slice(9, 10);

            return checkDigit === expect;
        },

        si: function (vatNum) {
            var expect;

            // Checks the check digits of a Slovenian VAT number.

            var total = 0;
            var multipliers = [8, 7, 6, 5, 4, 3, 2];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 7; i++) total += +vatNum.charAt(i) * multipliers[i];

            // Establish check digits using modulus 11
            total = 11 - total % 11;
            if (total === 10) {
                total = 0;
            }

            // Compare the number with the last character of the VAT number. If it is the
            // same, then it's a valid check digit.
            expect = +vatNum.slice(7, 8);
            return !!(total !== 11 && total === expect);
        },

        sk: function (vatNum) {
            var expect = 0;
            var checkDigit = (vatNum % 11);
            // Checks the check digits of a Slovakian VAT number.
            // Check that the modulus of the whole VAT number is 0 - else error
            return checkDigit === expect;
        }
    };

    if (typeof module === 'object' && module.exports) module.exports = exports;

    return exports;
})();
 return VatChecker;});