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

            console.log(vatNum);

            for (var k in _REGEXP) {
                if (_REGEXP.hasOwnProperty(k)) {

                    var isMatch = _REGEXP[k].test(vatNum);

                    if (isMatch) {
                        //TODO (S.Panfilov) todo and exec should do the same, but they didn't
                        var parsedNum = _REGEXP[k].exec(vatNum);

                        var cCode = parsedNum[1];
                        var cNumber = parsedNum[2];
                        if (!cCode || cCode.length === 0) cCode = defCCode;

                        var checkDigitFunc = _checks[cCode];
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

    //TODO (S.Panfilov) debug
    function check(vatNum) {

        var total = 0;
        var multipliers = [1, 2, 1, 2, 1, 2, 1];
        var temp = 0;

        for (var i = 0; i < 7; i++) {
            temp = Number(vatNum.charAt(i)) * multipliers[i];
            if (temp > 9)
                total += Math.floor(temp / 10) + temp % 10;
            else
                total += temp;
        }

        total = 10 - (total + 4) % 10;
        if (total === 10) total = 0;

        //return total === vatNum.slice(7, 8);


        return {
            total: total,
            expect: vatNum.slice(7, 8)
        }

    }

    var _checks = {
        AT: function (vatNum) {
            var total = 0;
            var multipliers = [1, 2, 1, 2, 1, 2, 1];
            var temp = 0;

            for (var i = 0; i < 7; i++) {
                temp = Number(vatNum.charAt(i)) * multipliers[i];
                if (temp > 9)
                    total += Math.floor(temp / 10) + temp % 10;
                else
                    total += temp;
            }

            total = 10 - (total + 4) % 10;
            if (total === 10) total = 0;

            return total === vatNum.slice(7, 8);
        },
        BE: function (vatNum) {
            if (vatNum.length === 9) vatNum = "0" + vatNum;
            if (vatNum.slice(1, 2) === 0) return false;

            return 97 - vatNum.slice(0, 8) % 97 === vatNum.slice(8, 10);
        },

        BG: function (vatNum) {
            if (vatNum.length === 9) {
                var total = 0;
                var temp = 0;
                for (var i = 0; i < 8; i++) temp += Number(vatNum.charAt(i)) * (i + 1);
                total = temp % 11;
                if (total !== 10) {
                    return total === vatNum.slice(8);
                }

                var temp = 0;
                for (var i = 0; i < 8; i++) temp += Number(vatNum.charAt(i)) * (i + 3);

                total = temp % 11;
                if (total === 10) total = 0;
                return total === vatNum.slice(8);
            }

            // 10 digit VAT code - see if it relates to a standard physical person
            if ((/^\d\d[0-5]\d[0-3]\d\d{4}$/).test(vatNum)) {

                // Check month
                var month = Number(vatNum.slice(2, 4));
                if ((month > 0 && month < 13) || (month > 20 && month < 33) || (month > 40 && month < 53)) {

                    // Extract the next digit and multiply by the counter.
                    var multipliers = [2, 4, 8, 5, 10, 9, 7, 3, 6];
                    var total = 0;
                    for (var i = 0; i < 9; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

                    // Establish check digit.
                    total = total % 11;
                    if (total === 10) total = 0;

                    // Check to see if the check digit given is correct, If not, try next type of person
                    if (total === vatNum.substr(9, 1)) return true;
                }
            }

            // It doesn't relate to a standard physical person - see if it relates to a foreigner.

            // Extract the next digit and multiply by the counter.
            var multipliers = [21, 19, 17, 13, 11, 9, 7, 3, 1];
            var total = 0;
            for (var i = 0; i < 9; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Check to see if the check digit given is correct, If not, try next type of person
            if (total % 10 === vatNum.substr(9, 1)) return true;

            // Finally, if not yet identified, see if it conforms to a miscellaneous VAT number

            // Extract the next digit and multiply by the counter.
            var multipliers = [4, 3, 2, 7, 6, 5, 4, 3, 2];
            var total = 0;
            for (var i = 0; i < 9; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digit.
            total = 11 - total % 11;
            if (total === 10) return false;
            if (total === 11) total = 0;

            // Check to see if the check digit given is correct, If not, we have an error with the VAT number
            if (total === vatNum.substr(9, 1))
                return true;
            else
                return false;
        },

        CHE: function (vatNum) {

            // Checks the check digits of a Swiss VAT number.

            // Extract the next digit and multiply by the counter.
            var multipliers = [5, 4, 3, 2, 7, 6, 5, 4];
            var total = 0;
            for (var i = 0; i < 8; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digit.
            total = 11 - total % 11;
            if (total === 10) return false;
            if (total === 11) total = 0;

            // Check to see if the check digit given is correct, If not, we have an error with the VAT number
            return total === vatNum.substr(8, 1);
        },

        CY: function (vatNum) {

            // Checks the check digits of a Cypriot VAT number.

            // Not allowed to start with '12'
            if (Number(vatNum.slice(0, 2) === 12)) return false;

            // Extract the next digit and multiply by the counter.
            var total = 0;
            for (var i = 0; i < 8; i++) {
                var temp = Number(vatNum.charAt(i));
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
            return total === vatNum.substr(8, 1);
        },

        CZ: function (vatNum) {

            // Checks the check digits of a Czech Republic VAT number.

            var total = 0;
            var multipliers = [8, 7, 6, 5, 4, 3, 2];

            var czexp = [];
            czexp[0] = (/^\d{8}$/);
            czexp[1] = (/^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/);
            czexp[2] = (/^6\d{8}$/);
            czexp[3] = (/^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/);
            var i = 0;

            // Legal entities
            if (czexp[0].test(vatNum)) {

                // Extract the next digit and multiply by the counter.
                for (var i = 0; i < 7; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

                // Establish check digit.
                total = 11 - total % 11;
                if (total === 10) total = 0;
                if (total === 11) total = 1;

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                return total === vatNum.slice(7, 8);
            }

            // Individuals type 1
            else if (czexp[1].test(vatNum)) {
                if (temp = Number(vatNum.slice(0, 2)) > 53) return false;
                return true;
            }

            // Individuals type 2
            else if (czexp[2].test(vatNum)) {

                // Extract the next digit and multiply by the counter.
                for (var i = 0; i < 7; i++) total += Number(vatNum.charAt(i + 1)) * multipliers[i];

                // Establish check digit.
                total = 11 - total % 11;
                if (total === 10) total = 0;
                if (total === 11) total = 1;

                // Convert calculated check digit according to a lookup table;
                var lookup = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10];
                return lookup[total - 1] === vatNum.slice(8, 9);
            }

            // Individuals type 3
            else if (czexp[3].test(vatNum)) {
                var temp = Number(vatNum.slice(0, 2)) + Number(vatNum.slice(2, 4)) + Number(vatNum.slice(4, 6)) + Number(vatNum.slice(6, 8)) + Number(vatNum.slice(8));
                return !!(temp % 11 === 0 && Number(vatNum) % 11 === 0);
            }

            // else error
            return false;
        },

        DE: function (vatNum) {

            // Checks the check digits of a German VAT number.

            var product = 10;
            var sum = 0;
            var checkdigit = 0;
            for (var i = 0; i < 8; i++) {

                // Extract the next digit and implement peculiar algorithm!.
                sum = (Number(vatNum.charAt(i)) + product) % 10;
                if (sum === 0) {
                    sum = 10
                }
                product = (2 * sum) % 11;
            }

            // Establish check digit.
            if (11 - product === 10) {
                checkdigit = 0
            } else {
                checkdigit = 11 - product
            }

            // Compare it with the last two characters of the VAT number. If the same, then it is a valid
            // check digit.
            return checkdigit === vatNum.slice(8, 9);
        },

        DK: function (vatNum) {

            // Checks the check digits of a Danish VAT number.

            var total = 0;
            var multipliers = [2, 7, 6, 5, 4, 3, 2, 1];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digit.
            total = total % 11;

            // The remainder should be 0 for it to be valid..
            return total === 0;
        },

        EE: function (vatNum) {

            // Checks the check digits of an Estonian VAT number.

            var total = 0;
            var multipliers = [3, 7, 1, 3, 7, 1, 3, 7];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digits using modulus 10.
            total = 10 - total % 10;
            if (total === 10) total = 0;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(8, 9);
        },

        EL: function (vatNum) {

            // Checks the check digits of a Greek VAT number.

            var total = 0;
            var multipliers = [256, 128, 64, 32, 16, 8, 4, 2];

            //eight character numbers should be prefixed with an 0.
            if (vatNum.length === 8) {
                vatNum = "0" + vatNum
            }

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digit.
            total = total % 11;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(8, 9);
        },

        ES: function (vatNum) {

            // Checks the check digits of a Spanish VAT number.

            var total = 0;
            var temp = 0;
            var multipliers = [2, 1, 2, 1, 2, 1, 2];
            var esexp = [];
            esexp[0] = (/^[A-H|J|U|V]\d{8}$/);
            esexp[1] = (/^[A-H|N-S|W]\d{7}[A-J]$/);
            esexp[2] = (/^[0-9|Y|Z]\d{7}[A-Z]$/);
            esexp[3] = (/^[K|L|M|X]\d{7}[A-Z]$/);
            var i = 0;

            // National juridical entities
            if (esexp[0].test(vatNum)) {

                // Extract the next digit and multiply by the counter.
                for (i = 0; i < 7; i++) {
                    temp = Number(vatNum.charAt(i + 1)) * multipliers[i];
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
                return total === vatNum.slice(8, 9);
            }

            // Juridical entities other than national ones
            else if (esexp[1].test(vatNum)) {

                // Extract the next digit and multiply by the counter.
                for (i = 0; i < 7; i++) {
                    temp = Number(vatNum.charAt(i + 1)) * multipliers[i];
                    if (temp > 9)
                        total += Math.floor(temp / 10) + temp % 10;
                    else
                        total += temp;
                }

                // Now calculate the check digit itself.
                total = 10 - total % 10;
                total = String.fromCharCode(total + 64);

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                return total === vatNum.slice(8, 9);
            }

            // Personal number (NIF) (starting with numeric of Y or Z)
            else if (esexp[2].test(vatNum)) {
                var tempnumber = vatNum;
                if (tempnumber.substring(0, 1) === 'Y') tempnumber = tempnumber.replace(/Y/, "1");
                if (tempnumber.substring(0, 1) === 'Z') tempnumber = tempnumber.replace(/Z/, "2");
                return tempnumber.charAt(8) === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(Number(tempnumber.substring(0, 8)) % 23);
            }

            // Personal number (NIF) (starting with K, L, M, or X)
            else if (esexp[3].test(vatNum)) {
                return vatNum.charAt(8) === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(Number(vatNum.substring(1, 8)) % 23);
            }

            else return false;
        },

        EU: function (vatNum) {

            // We know little about EU numbers apart from the fact that the first 3 digits represent the
            // country, and that there are nine digits in total.
            return true;
        },

        FI: function (vatNum) {

            // Checks the check digits of a Finnish VAT number.

            var total = 0;
            var multipliers = [7, 9, 10, 5, 8, 4, 2];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 7; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digit.
            total = 11 - total % 11;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(7, 8);
        },

        FR: function (vatNum) {

            // Checks the check digits of a French VAT number.

            if (!(/^\d{11}$/).test(vatNum)) return true;

            // Extract the last nine digits as an integer.
            var total = vatNum.substring(2);

            // Establish check digit.
            total = (total * 100 + 12) % 97;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(0, 2);
        },

        GB: function (vatNum) {

            // Checks the check digits of a UK VAT number.

            var multipliers = [8, 7, 6, 5, 4, 3, 2];

            // Government departments
            if (vatNum.substr(0, 2) === 'GD') {
                return vatNum.substr(2, 3) < 500;
            }

            // Health authorities
            if (vatNum.substr(0, 2) === 'HA') {
                return vatNum.substr(2, 3) > 499;
            }

            // Standard and commercial numbers
            var total = 0;

            // 0 VAT numbers disallowed!
            if (Number(vatNum.slice(0)) === 0) return false;

            // Check range is OK for modulus 97 calculation
            var no = Number(vatNum.slice(0, 7));

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 7; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Old numbers use a simple 97 modulus, but new numbers use an adaptation of that (less 55). Our
            // VAT number could use either system, so we check it against both.

            // Establish check digits by subtracting 97 from total until negative.
            var cd = total;
            while (cd > 0) {
                cd = cd - 97;
            }

            // Get the absolute value and compare it with the last two characters of the VAT number. If the
            // same, then it is a valid traditional check digit. However, even then the number must fit within
            // certain specified ranges.
            cd = Math.abs(cd);
            if (cd === vatNum.slice(7, 9) && no < 9990001 && (no < 100000 || no > 999999) && (no < 9490001 || no > 9700000)) return true;

            // Now try the new method by subtracting 55 from the check digit if we can - else add 42
            if (cd >= 55)
                cd = cd - 55;
            else
                cd = cd + 42;
            return !!(cd === vatNum.slice(7, 9) && no > 1000000);
        },

        HR: function (vatNum) {

            // Checks the check digits of a Croatian VAT number using ISO 7064, MOD 11-10 for check digit.

            var product = 10;
            var sum = 0;
            var checkdigit = 0;

            for (var i = 0; i < 10; i++) {

                // Extract the next digit and implement the algorithm
                sum = (Number(vatNum.charAt(i)) + product) % 10;
                if (sum === 0) {
                    sum = 10
                }

                product = (2 * sum) % 11;
            }

            // Now check that we have the right check digit
            return (product + vatNum.slice(10, 11) * 1) % 10 === 1;
        },

        HU: function (vatNum) {

            // Checks the check digits of a Hungarian VAT number.

            var total = 0;
            var multipliers = [9, 7, 3, 1, 9, 7, 3];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 7; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digit.
            total = 10 - total % 10;
            if (total === 10) total = 0;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(7, 8);
        },

        IE: function (vatNum) {

            // Checks the check digits of an Irish VAT number.

            var total = 0;
            var multipliers = [8, 7, 6, 5, 4, 3, 2];

            // If the code is type 1 format, we need to convert it to the new before performing the validation.
            if (/^\d[A-Z\*\+]/.test(vatNum)) vatNum = "0" + vatNum.substring(2, 7) + vatNum.substring(0, 1) + vatNum.substring(7, 8);

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 7; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // If the number is type 3 then we need to include the trailing A or H in the calculation
            if (/^\d{7}[A-Z][AH]$/.test(vatNum)) {

                // Add in a multiplier for the character A (1*9=9) or H (8*9=72)
                if (vatNum.charAt(8) === 'H')
                    total += 72;
                else
                    total += 9;
            }

            // Establish check digit using modulus 23, and translate to char. equivalent.
            total = total % 23;
            if (total === 0)
                total = "W";
            else
                total = String.fromCharCode(total + 64);

            // Compare it with the eighth character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(7, 8);
        },

        IT: function (vatNum) {

            // Checks the check digits of an Italian VAT number.

            var total = 0;
            var multipliers = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
            var temp;

            // The last three digits are the issuing office, and cannot exceed more 201, unless 999 or 888
            if (Number(vatNum.slice(0, 7)) === 0) return false;
            temp = Number(vatNum.slice(7, 10));
            if ((temp < 1) || (temp > 201) && temp !== 999 && temp !== 888) return false;

            // Extract the next digit and multiply by the appropriate
            for (var i = 0; i < 10; i++) {
                temp = Number(vatNum.charAt(i)) * multipliers[i];
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
            return total === vatNum.slice(10, 11);
        },

        LT: function (vatNum) {

            // Checks the check digits of a Lithuanian VAT number.

            // 9 character VAT numbers are for legal persons
            if (vatNum.length === 9) {

                // 8th character must be one
                if (!(/^\d{7}1/).test(vatNum)) return false;

                // Extract the next digit and multiply by the counter+1.
                var total = 0;
                for (var i = 0; i < 8; i++) total += Number(vatNum.charAt(i)) * (i + 1);

                // Can have a double check digit calculation!
                if (total % 11 === 10) {
                    var multipliers = [3, 4, 5, 6, 7, 8, 9, 1];
                    total = 0;
                    for (i = 0; i < 8; i++) total += Number(vatNum.charAt(i)) * multipliers[i];
                }

                // Establish check digit.
                total = total % 11;
                if (total === 10) {
                    total = 0;
                }

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                return total === vatNum.slice(8, 9);
            }

            // 12 character VAT numbers are for temporarily registered taxpayers
            else {

                // 11th character must be one
                if (!(/^\d{10}1/).test(vatNum)) return false;

                // Extract the next digit and multiply by the counter+1.
                var total = 0;
                var multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
                for (var i = 0; i < 11; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

                // Can have a double check digit calculation!
                if (total % 11 === 10) {
                    var multipliers = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4];
                    total = 0;
                    for (i = 0; i < 11; i++) total += Number(vatNum.charAt(i)) * multipliers[i];
                }

                // Establish check digit.
                total = total % 11;
                if (total === 10) {
                    total = 0;
                }

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                return total === vatNum.slice(11, 12);
            }
        },

        LU: function (vatNum) {

            // Checks the check digits of a Luxembourg VAT number.

            return vatNum.slice(0, 6) % 89 === vatNum.slice(6, 8);
        },

        LV: function (vatNum) {

            // Checks the check digits of a Latvian VAT number.

            // Differentiate between legal entities and natural bodies. For the latter we simply check that
            // the first six digits correspond to valid DDMMYY dates.
            if ((/^[0-3]/).test(vatNum)) {
                return !!(/^[0-3][0-9][0-1][0-9]/).test(vatNum);
            }

            else {

                var total = 0;
                var multipliers = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6];

                // Extract the next digit and multiply by the counter.
                for (var i = 0; i < 10; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

                // Establish check digits by getting modulus 11.
                if (total % 11 === 4 && vatNum[0] === 9) total = total - 45;
                if (total % 11 === 4)
                    total = 4 - total % 11;
                else if (total % 11 > 4)
                    total = 14 - total % 11;
                else if (total % 11 < 4)
                    total = 3 - total % 11;

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                return total === vatNum.slice(10, 11);
            }
        },

        MT: function (vatNum) {

            // Checks the check digits of a Maltese VAT number.

            var total = 0;
            var multipliers = [3, 4, 6, 7, 8, 9];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 6; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digits by getting modulus 37.
            total = 37 - total % 37;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(6, 8) * 1;
        },

        NL: function (vatNum) {

            // Checks the check digits of a Dutch VAT number.

            var total = 0;
            var multipliers = [9, 8, 7, 6, 5, 4, 3, 2];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digits by getting modulus 11.
            total = total % 11;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(8, 9);
        },

        NO: function (vatNum) {

            // Checks the check digits of a Norwegian VAT number.
            // See http://www.brreg.no/english/coordination/number.html

            var total = 0;
            var multipliers = [3, 2, 7, 6, 5, 4, 3, 2];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digits by getting modulus 11. Check digits > 9 are invalid
            total = 11 - total % 11;
            if (total === 11) {
                total = 0;
            }
            if (total < 10) {

                // Compare it with the last character of the VAT number. If it's the same, then it's valid.
                return total === vatNum.slice(8, 9);
            }
        },

        PL: function (vatNum) {

            // Checks the check digits of a Polish VAT number.

            var total = 0;
            var multipliers = [6, 5, 7, 2, 3, 4, 5, 6, 7];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 9; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digits subtracting modulus 11 from 11.
            total = total % 11;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(9, 10);
        },

        PT: function (vatNum) {

            // Checks the check digits of a Portugese VAT number.

            var total = 0;
            var multipliers = [9, 8, 7, 6, 5, 4, 3, 2];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 8; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digits subtracting modulus 11 from 11.
            total = 11 - total % 11;
            if (total > 9) {
                total = 0;
            }

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(8, 9);
        },

        RO: function (vatNum) {

            // Checks the check digits of a Romanian VAT number.

            var multipliers = [7, 5, 3, 2, 1, 7, 5, 3, 2];

            // Extract the next digit and multiply by the counter.
            var VATlen = vatNum.length;
            multipliers = multipliers.slice(10 - VATlen);
            var total = 0;
            for (var i = 0; i < vatNum.length - 1; i++) {
                total += Number(vatNum.charAt(i)) * multipliers[i];
            }

            // Establish check digits by getting modulus 11.
            total = (10 * total) % 11;
            if (total === 10) total = 0;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return total === vatNum.slice(vatNum.length - 1, vatNum.length);
        },

        RS: function (vatNum) {

            // Checks the check digits of a Serbian VAT number using ISO 7064, MOD 11-10 for check digit.

            var product = 10;
            var sum = 0;
            var checkdigit = 0;

            for (var i = 0; i < 8; i++) {

                // Extract the next digit and implement the algorithm
                sum = (Number(vatNum.charAt(i)) + product) % 10;
                if (sum === 0) {
                    sum = 10
                }
                product = (2 * sum) % 11;
            }

            // Now check that we have the right check digit
            return (product + vatNum.slice(8, 9) * 1) % 10 === 1;
        },

        RU: function (vatNum) {

            // Checks the check digits of a Russian INN number
            // See http://russianpartner.biz/test_inn.html for algorithm

            // 10 digit INN numbers
            if (vatNum.length === 10) {
                var total = 0;
                var multipliers = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                for (var i = 0; i < 10; i++) {
                    total += Number(vatNum.charAt(i)) * multipliers[i];
                }
                total = total % 11;
                if (total > 9) {
                    total = total % 10
                }

                // Compare it with the last character of the VAT number. If it is the same, then it's valid
                return total === vatNum.slice(9, 10);

                // 12 digit INN numbers
            } else if (vatNum.length === 12) {
                var total1 = 0;
                var multipliers1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                var total2 = 0;
                var multipliers2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];

                for (var i = 0; i < 11; i++) total1 += Number(vatNum.charAt(i)) * multipliers1[i];
                total1 = total1 % 11;
                if (total1 > 9) {
                    total1 = total1 % 10
                }

                for (var i = 0; i < 11; i++) total2 += Number(vatNum.charAt(i)) * multipliers2[i];
                total2 = total2 % 11;
                if (total2 > 9) {
                    total2 = total2 % 10
                }

                // Compare the first check with the 11th character and the second check with the 12th and last
                // character of the VAT number. If they're both the same, then it's valid
                return !!((total1 === vatNum.slice(10, 11)) && (total2 === vatNum.slice(11, 12)));
            }
        },

        SE: function (vatNum) {

            // Calculate R where R = R1 + R3 + R5 + R7 + R9, and Ri = INT(Ci/5) + (Ci*2) modulo 10
            var R = 0;
            var digit;
            for (var i = 0; i < 9; i = i + 2) {
                digit = Number(vatNum.charAt(i));
                R += Math.floor(digit / 5) + ((digit * 2) % 10);
            }

            // Calculate S where S = C2 + C4 + C6 + C8
            var S = 0;
            for (var i = 1; i < 9; i = i + 2) S += Number(vatNum.charAt(i));

            // Calculate the Check Digit
            var cd = (10 - (R + S) % 10) % 10;

            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            return cd === vatNum.slice(9, 10);
        },

        SI: function (vatNum) {

            // Checks the check digits of a Slovenian VAT number.

            var total = 0;
            var multipliers = [8, 7, 6, 5, 4, 3, 2];

            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 7; i++) total += Number(vatNum.charAt(i)) * multipliers[i];

            // Establish check digits using modulus 11
            total = 11 - total % 11;
            if (total === 10) {
                total = 0;
            }

            // Compare the number with the last character of the VAT number. If it is the
            // same, then it's a valid check digit.
            return !!(total !== 11 && total === vatNum.slice(7, 8));
        },

        SK: function (vatNum) {

            // Checks the check digits of a Slovakian VAT number.

            // Check that the modulus of the whole VAT number is 0 - else error
            return Number(vatNum % 11) === 0;
        }
    };

    if (typeof module === 'object' && module.exports) module.exports = exports;

    return exports;
})();