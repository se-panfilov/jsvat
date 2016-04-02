var jsvat = (function () {
  'use strict';

  

  function _validateRegex(vat, regex) {
    return regex.test(vat);
  }

  function _validateRules(vat, regex, countryName) {
    var parsedNum = regex.exec(vat);

    //var code = parsedNum[1];
    var number = parsedNum[2];
    //if (!code || code.length === 0) code = 'GB';

    return _checks[countryName](number, countryName);
  }

  function _validate(vat, regex, countryName) {
    var result = false;
    if (_validateRegex(vat, regex)) {
      result = _validateRules(vat, regex, countryName);
    }
    return result;
  }

  var exports = {
    checkVAT: function (vat) {
      if (!vat) return false;
      vat = vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');

      for (var countryName in CONDITIONS) {
        if (CONDITIONS.hasOwnProperty(countryName)) {
          var regex = CONDITIONS[countryName].regex;

          //TODO (S.Panfilov) this is not cross-browser check
          if (Array.isArray(regex)) {
            for (var i = 0; i < regex.length; i++) {
              if (_validate(vat, regex[i], countryName)) return true;
            }
          } else {
            if (_validate(vat, regex, countryName)) return true;
          }
        }
      }
      return false;

    }
  };

  

  var _checks = {
,
    spain: function (vat, countryName) {
      var i = 0;
      var total = 0;

      // National juridical entities
      if (CONDITIONS[countryName].additional[0].test(vat)) {

        // Extract the next digit and multiply by the counter.
        for (i = 0; i < 7; i++) {
          temp = vat.charAt(i + 1) * CONDITIONS[countryName].multipliers[i];
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
        expect = +vat.slice(8, 9);
        return total === expect;
      }

      // Juridical entities other than national ones
      else if (CONDITIONS[countryName].additional[1].test(vat)) {

        // Extract the next digit and multiply by the counter.
        for (i = 0; i < 7; i++) {
          temp = vat.charAt(i + 1) * CONDITIONS[countryName].multipliers[i];
          if (temp > 9)
            total += Math.floor(temp / 10) + temp % 10;
          else
            total += temp;
        }

        // Now calculate the check digit itself.
        total = 10 - total % 10;
        total = String.fromCharCode(total + 64);

        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        expect = vat.slice(8, 9);
        return total === expect;
      }

      // Personal number (NIF) (starting with numeric of Y or Z)
      else if (CONDITIONS[countryName].additional[2].test(vat)) {
        var tempnumber = vat;
        if (tempnumber.substring(0, 1) === 'Y') tempnumber = tempnumber.replace(/Y/, '1');
        if (tempnumber.substring(0, 1) === 'Z') tempnumber = tempnumber.replace(/Z/, '2');
        expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempnumber.substring(0, 8) % 23);
        return tempnumber.charAt(8) === expect;
      }

      // Personal number (NIF) (starting with K, L, M, or X)
      else if (CONDITIONS[countryName].additional[3].test(vat)) {
        expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+vat.substring(1, 8) % 23);
        return vat.charAt(8) === expect;
      }

      else return false;
    },
    europe: function () {
      //TODO (S.Panfilov) wtf?
      // We know little about EU numbers apart from the fact that the first 3 digits represent the
      // country, and that there are nine digits in total.
      return true;
    },
    finland: function (vat, countryName) {
      var total = 0;
      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 7; i++) total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];

      // Establish check digit.
      total = 11 - total % 11;
      if (total > 9) {
        total = 0;
      }

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(7, 8);
      return total === expect;
    },
    france: function (vat) {
      var total;
      // Checks the check digits of a French VAT number.
      if (!(/^\d{11}$/).test(vat)) {
        return true;
      }

      // Extract the last nine digits as an integer.
      total = +vat.substring(2);

      // Establish check digit.
      total = (total * 100 + 12) % 97;

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(0, 2);
      return total === expect;
    },
    united_kingdom: function (vat, countryName) {
      var total = 0;
      // Government departments
      if (vat.substr(0, 2) === 'GD') {
        expect = 500;
        return vat.substr(2, 3) < expect;
      }

      // Health authorities
      if (vat.substr(0, 2) === 'HA') {
        expect = 499;
        return vat.substr(2, 3) > expect;
      }

      // Standard and commercial numbers


      // 0 VAT numbers disallowed!
      if (+vat.slice(0) === 0) return false;

      // Check range is OK for modulus 97 calculation
      var no = +vat.slice(0, 7);

      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 7; i++) {
        total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
      }

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
      if (checkDigit === +vat.slice(7, 9) && no < 9990001 && (no < 100000 || no > 999999) && (no < 9490001 || no > 9700000)) return true;

      // Now try the new method by subtracting 55 from the check digit if we can - else add 42
      if (checkDigit >= 55)
        checkDigit = checkDigit - 55;
      else
        checkDigit = checkDigit + 42;
      expect = +vat.slice(7, 9);
      return !!(checkDigit === expect && no > 1000000);
    },
    croatia: function (vat) {


      // Checks the check digits of a Croatian VAT number using ISO 7064, MOD 11-10 for check digit.

      var product = 10;
      var sum = 0;

      for (var i = 0; i < 10; i++) {

        // Extract the next digit and implement the algorithm
        sum = (+vat.charAt(i) + product) % 10;
        if (sum === 0) {
          sum = 10;
        }

        product = (2 * sum) % 11;
      }

      // Now check that we have the right check digit
      expect = +vat.slice(10, 11);
      return (product + expect) % 10 === 1;
    },
    hungary: function (vat, countryName) {
      var total = 0;
      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 7; i++) {
        total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
      }

      // Establish check digit.
      total = 10 - total % 10;
      if (total === 10) total = 0;

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(7, 8);
      return total === expect;
    },
    ireland: function (vat, countryName) {
      var total = 0;
      // If the code is type 1 format, we need to convert it to the new before performing the validation.
      if (/^\d[A-Z\*\+]/.test(vat)) {
        vat = '0' + vat.substring(2, 7) + vat.substring(0, 1) + vat.substring(7, 8);
      }

      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 7; i++) {
        total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
      }

      // If the number is type 3 then we need to include the trailing A or H in the calculation
      if (/^\d{7}[A-Z][AH]$/.test(vat)) {
        // Add in a multiplier for the character A (1*9=9) or H (8*9=72)
        if (vat.charAt(8) === 'H') {
          total += 72;
        } else {
          total += 9;
        }
      }

      // Establish check digit using modulus 23, and translate to char. equivalent.
      total = total % 23;
      if (total === 0) {
        total = 'W';
      } else {
        total = String.fromCharCode(total + 64);
      }

      // Compare it with the eighth character of the VAT number. If it's the same, then it's valid.
      expect = vat.slice(7, 8);
      return total === expect;
    },
    italy: function (vat, countryName) {
      var total = 0;
      // The last three digits are the issuing office, and cannot exceed more 201, unless 999 or 888
      if (+vat.slice(0, 7) === 0) {
        return false;
      }

      temp = +vat.slice(7, 10);
      if ((temp < 1) || (temp > 201) && temp !== 999 && temp !== 888) {
        return false;
      }

      // Extract the next digit and multiply by the appropriate
      for (var i = 0; i < 10; i++) {
        temp = +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
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
      expect = +vat.slice(10, 11);
      return total === expect;
    },
    lithunia: function (vat, countryName) {
      var total = 0;
      // 9 character VAT numbers are for legal persons
      if (vat.length === 9) {

        // 8th character must be one
        if (!(/^\d{7}1/).test(vat)) return false;

        // Extract the next digit and multiply by the counter+1.
        total = 0;
        for (var i = 0; i < 8; i++) {
          total += +vat.charAt(i) * (i + 1);
        }

        // Can have a double check digit calculation!
        if (total % 11 === 10) {
          total = 0;
          for (var j = 0; j < 8; j++) {
            total += +vat.charAt(j) * CONDITIONS[countryName].multipliers.short[j];
          }
        }

        // Establish check digit.
        total = total % 11;
        if (total === 10) {
          total = 0;
        }

        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        expect = +vat.slice(8, 9);
        return total === expect;
      }

      // 12 character VAT numbers are for temporarily registered taxpayers
      else {

        // 11th character must be one
        if (!(/^\d{10}1/).test(vat)) return false;

        // Extract the next digit and multiply by the counter+1.
        total = 0;
        for (var k = 0; k < 11; k++) {
          total += +vat.charAt(k) * CONDITIONS[countryName].multipliers.med[k];
        }

        // Can have a double check digit calculation!
        if (total % 11 === 10) {
          total = 0;
          for (var l = 0; l < 11; l++) {
            total += +vat.charAt(l) * CONDITIONS[countryName].multipliers.alt[l];
          }
        }

        // Establish check digit.
        total = total % 11;
        if (total === 10) {
          total = 0;
        }

        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        expect = +vat.slice(11, 12);
        return total === expect;
      }
    },
    luxembourg: function (vat) {
      var expect = +vat.slice(6, 8);
      var checkDigit = +vat.slice(0, 6) % 89;
      // Checks the check digits of a Luxembourg VAT number.

      return checkDigit === expect;
    },
    latvia: function (vat, countryName) {
      var total = 0;

      // Differentiate between legal entities and natural bodies. For the latter we simply check that
      // the first six digits correspond to valid DDMMYY dates.
      if ((/^[0-3]/).test(vat)) {
        return !!(/^[0-3][0-9][0-1][0-9]/).test(vat);
      } else {

        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 10; i++) {
          total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
        }

        // Establish check digits by getting modulus 11.
        if (total % 11 === 4 && vat[0] === 9) total = total - 45;
        if (total % 11 === 4)
          total = 4 - total % 11;
        else if (total % 11 > 4)
          total = 14 - total % 11;
        else if (total % 11 < 4)
          total = 3 - total % 11;

        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        expect = +vat.slice(10, 11);
        return total === expect;
      }
    },
    malta: function (vat, countryName) {
      var total = 0;
      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 6; i++) {
        total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
      }

      // Establish check digits by getting modulus 37.
      total = 37 - total % 37;

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(6, 8);
      return total === expect;
    },
    netherlands: function (vat, countryName) {
      var total = 0;
      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 8; i++) {
        total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
      }

      // Establish check digits by getting modulus 11.
      total = total % 11;
      if (total > 9) {
        total = 0;
      }

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(8, 9);
      return total === expect;
    },
    norway: function (vat, countryName) {
      var total = 0;
      // See http://www.brreg.no/english/coordination/number.html

      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 8; i++) {
        total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
      }

      // Establish check digits by getting modulus 11. Check digits > 9 are invalid
      total = 11 - total % 11;
      if (total === 11) {
        total = 0;
      }
      if (total < 10) {

        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        expect = +vat.slice(8, 9);
        return total === expect;
      }
    },
    poland: function (vat, countryName) {
      var total = 0;
      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 9; i++) {
        total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
      }

      // Establish check digits subtracting modulus 11 from 11.
      total = total % 11;
      if (total > 9) {
        total = 0;
      }

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(9, 10);
      return total === expect;
    },
    portugal: function (vat, countryName) {
      var total = 0;
      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 8; i++) {
        total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
      }

      // Establish check digits subtracting modulus 11 from 11.
      total = 11 - total % 11;
      if (total > 9) {
        total = 0;
      }

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(8, 9);
      return total === expect;
    },
    romania: function (vat, countryName) {
      var total = 0;
      // Extract the next digit and multiply by the counter.
      var vatLength = vat.length;
      var multipliers = CONDITIONS[countryName].multipliers.slice(10 - vatLength);

      for (var i = 0; i < vat.length - 1; i++) {
        total += +vat.charAt(i) * multipliers[i];
      }

      // Establish check digits by getting modulus 11.
      total = (10 * total) % 11;
      if (total === 10) total = 0;

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(vat.length - 1, vat.length);
      return total === expect;
    },
    serbia: function (vat) {
      // Checks the check digits of a Serbian VAT number using ISO 7064, MOD 11-10 for check digit.

      var product = 10;
      var sum = 0;
      var checkDigit;

      for (var i = 0; i < 8; i++) {

        // Extract the next digit and implement the algorithm
        sum = (+vat.charAt(i) + product) % 10;
        if (sum === 0) {
          sum = 10;
        }
        product = (2 * sum) % 11;
      }

      // Now check that we have the right check digit
      expect = 1;
      checkDigit = (product + (+vat.slice(8, 9))) % 10;
      return checkDigit === expect;
    },
    russia: function (vat, countryName) {
      var total = 0;
      var expect2;

      // Checks the check digits of a Russian INN number
      // See http://russianpartner.biz/test_inn.html for algorithm

      // 10 digit INN numbers
      if (vat.length === 10) {

        for (var i = 0; i < 10; i++) {
          total += +vat.charAt(i) * CONDITIONS[countryName].multipliers.m_1[i];
        }

        total = total % 11;
        if (total > 9) {
          total = total % 10;
        }

        // Compare it with the last character of the VAT number. If it is the same, then it's valid
        expect = +vat.slice(9, 10);
        return total === expect;

        // 12 digit INN numbers
      } else if (vat.length === 12) {
        var total1 = 0;
        var total2 = 0;

        for (var j = 0; j < 11; j++) {
          total1 += +vat.charAt(j) * CONDITIONS[countryName].multipliers.m_2[j];
        }

        total1 = total1 % 11;
        if (total1 > 9) {
          total1 = total1 % 10;
        }

        for (var k = 0; k < 11; k++) {
          total2 += +vat.charAt(k) * CONDITIONS[countryName].multipliers.m_3[k];
        }

        total2 = total2 % 11;
        if (total2 > 9) {
          total2 = total2 % 10;
        }

        // Compare the first check with the 11th character and the second check with the 12th and last
        // character of the VAT number. If they're both the same, then it's valid
        //expect = +vat.slice(10, 11);
        expect = (total1 === +vat.slice(10, 11));
        //expect2 = +vat.slice(11, 12);
        expect2 = (total2 === +vat.slice(11, 12));
        return (expect) && (expect2);
      }
    },
    sweden: function (vat) {
      // Calculate R where R = R1 + R3 + R5 + R7 + R9, and Ri = INT(Ci/5) + (Ci*2) modulo 10
      var R = 0;
      var digit;
      for (var i = 0; i < 9; i = i + 2) {
        digit = +vat.charAt(i);
        R += Math.floor(digit / 5) + ((digit * 2) % 10);
      }

      // Calculate S where S = C2 + C4 + C6 + C8
      var S = 0;
      for (var j = 1; j < 9; j = j + 2) {
        S += +vat.charAt(j);
      }

      var checkDigit = (10 - (R + S) % 10) % 10;

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(9, 10);

      return checkDigit === expect;
    },
    slovenia: function (vat, countryName) {
      var total = 0;
      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 7; i++) {
        total += +vat.charAt(i) * CONDITIONS[countryName].multipliers[i];
      }

      // Establish check digits using modulus 11
      total = 11 - total % 11;
      if (total === 10) {
        total = 0;
      }

      // Compare the number with the last character of the VAT number. If it is the
      // same, then it's a valid check digit.
      expect = +vat.slice(7, 8);
      return !!(total !== 11 && total === expect);
    },
    slovakia_republic: function (vat) {
      var expect = 0;
      var checkDigit = (vat % 11);
      // Checks the check digits of a Slovakian VAT number.
      // Check that the modulus of the whole VAT number is 0 - else error
      return checkDigit === expect;
    }
  };

  if (typeof module === 'object' && module.exports) module.exports = exports;

  return exports;
})();