var jsvat = (function(COUNTRIES) {
  'use strict';

  function _validateRegex(vat, regex) {
    return regex.test(vat);
  }

  function _validateRules(vat, regex, countryName) {
    var parsedNum = regex.exec(vat);
    var number = parsedNum[2];

    return COUNTRIES[countryName](number, countryName);
  }

  function _validate(vat, regex, countryName) {
    var result = false;
    if (_validateRegex(vat, regex)) {
      result = _validateRules(vat, regex, countryName);
    }
    return result;
  }

  function getClearVAT(vat) {
    return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
  }

  function _makeArr(regex) {
    //TODO (S.Panfilov) this is not cross-browser check
    if (!Array.isArray(regex)) {
      return [regex];
    }

    return regex;
  }

  var exports = {
    //TODO (S.Panfilov) Fixed config and refactor
    config: {
      austria: true,
      belgium: true,
      bulgaria: true,
      croatia: true,
      cyprus: true,
      czech_republic: true,
      denmark: true,
      estonia: true,
      europe: true,
      finland: true,
      france: true,
      germany: true,
      greece: true,
      hungary: true,
      ireland: true,
      italy: true,
      latvia: true,
      lithunia: true,
      luxembourg: true,
      malta: true,
      netherlands: true,
      norway: true,
      poland: true,
      portugal: true,
      romania: true,
      russia: true,
      serbia: true,
      slovakia_republic: true,
      slovenia: true,
      spain: true,
      sweden: true,
      switzerland: true,
      united_kingdom: true
    },
    checkVAT: function(vat, isDetailed) {
      if (!vat) return false;

      vat = getClearVAT(vat);

      var result = {
        isValid: false,
        countries: []
      };

      for (var countryName in COUNTRIES) {
        if (COUNTRIES.hasOwnProperty(countryName)) {

          //Make sure country check not skipped in config
          if (exports[countryName] && exports[countryName] !== false) {

            var regexArr = _makeArr(COUNTRIES[countryName].regex);

            for (var i = 0; i < regexArr.length; i++) {

              //If once become a true, shouldn't be a false any more
              result.isValid = (_validate(vat, regexArr[i], countryName)) ? true : result.isValid;

              if (result.isValid) {
                //If not detailed just return bool and exit
                if (!isDetailed) {
                  return result.isValid
                } else {
                  //if detailed, should fill array of countries
                  result.push(countryName);
                }
              }
            }

          }
        }
      }

      return isDetailed ? result : result.isValid;

    }
  };


  //Support of node.js
  if (typeof module === 'object' && module.exports) module.exports = exports;

  return exports;
})(COUNTRIES);
COUNTRIES.austria = {
  calcs: function(vat) {
    var total = 0;
    var temp;
    var expect;

    for (var i = 0; i < 7; i++) {
      temp = vat.charAt(i) * this.rules.multipliers[i];
      if (temp > 9)
        total += Math.floor(temp / 10) + temp % 10;
      else
        total += temp;
    }

    total = 10 - (total + 4) % 10;
    if (total === 10) total = 0;

    expect = +vat.slice(7, 8);

    return total === expect;
  },
  rules: {
    multipliers: [
      1,
      2,
      1,
      2,
      1,
      2,
      1
    ],
    regex: /^(AT)U(\d{8})$/
  }
};
COUNTRIES.belgium = {
  calcs: function(vat) {
    var expect;

    if (vat.length === 9) {
      vat = '0' + vat;
    }

    if (+vat.slice(1, 2) === 0) return false;

    var check = (97 - +vat.slice(0, 8) % 97);
    expect = +vat.slice(8, 10);
    return check === expect;
  },
  rules: {
    regex: /^(BE)(0?\d{9})$/
  }
};
COUNTRIES.bulgaria = {
  calcs: function(vat) {
    var checkNineLengthVat = function() {
      var total = 0;
      var temp;
      var expect;

      temp = 0;
      for (var i = 0; i < 8; i++) {
        temp += +vat.charAt(i) * (i + 1);
      }

      total = temp % 11;
      if (total !== 10) {
        expect = +vat.slice(8);
        return total === expect;
      }

      temp = 0;
      for (var j = 0; j < 8; j++) {
        temp += +vat.charAt(j) * (j + 3);
      }

      total = temp % 11;
      if (total === 10) total = 0;
      expect = +vat.slice(8);

      return total === expect;
    };

    var isPhysicalPerson = function() {
      var total = 0;
      // 10 digit VAT code - see if it relates to a standard physical person
      if ((/^\d\d[0-5]\d[0-3]\d\d{4}$/).test(vat)) {
        // Check month
        var month = +vat.slice(2, 4);
        if ((month > 0 && month < 13) || (month > 20 && month < 33) || (month > 40 && month < 53)) {

          total = 0;
          for (var k = 0; k < 9; k++) {
            total += +vat.charAt(k) * this.rules.multipliers.physical[k];
          }
          // Establish check digit.
          total = total % 11;
          if (total === 10) total = 0;

          // Check to see if the check digit given is correct, If not, try next type of person
          if (total === +vat.substr(9, 1)) return true;
        }
      }

      return false;

    };

    // It doesn't relate to a standard physical person - see if it relates to a foreigner.
    var isForeigner = function() {
      var total = 0;
      // Extract the next digit and multiply by the counter.
      for (var l = 0; l < 9; l++) {
        total += +vat.charAt(l) * this.rules.multipliers.foreigner[l];
      }

      // Check to see if the check digit given is correct, If not, try next type of person
      if (total % 10 === +vat.substr(9, 1)) {
        return true;
      }
    };

    var miscellaneousVAT = function() {
      var total = 0;
      // Finally, if not yet identified, see if it conforms to a miscellaneous VAT number

      for (var m = 0; m < 9; m++) {
        total += +vat.charAt(m) * this.rules.multipliers.miscellaneous[m];
      }

      // Establish check digit.
      total = 11 - total % 11;
      if (total === 10) return false;
      if (total === 11) total = 0;

      // Check to see if the check digit given is correct, If not, we have an error with the VAT number
      expect = +vat.substr(9, 1);
      return total === expect;
    };

    if (vat.length === 9) {
      return checkNineLengthVat();
    } else {
      return isPhysicalPerson() || isForeigner() || miscellaneousVAT();
    }

  },
  rules: {
    multipliers: {
      physical: [
        2,
        4,
        8,
        5,
        10,
        9,
        7,
        3,
        6
      ],
      foreigner: [
        21,
        19,
        17,
        13,
        11,
        9,
        7,
        3,
        1
      ],
      miscellaneous: [
        4,
        3,
        2,
        7,
        6,
        5,
        4,
        3,
        2
      ]
    },
    regex: /^(BG)(\d{9,10})$/
  }
};
COUNTRIES.croatia = {
  calcs: function(vat) {
    var expect;

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
  rules: {
    regex: /^(HR)(\d{11})$/
  }
};
COUNTRIES.cyprus = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Not allowed to start with '12'
    if (+vat.slice(0, 2) === 12) return false;

    // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 8; i++) {
      var temp = +vat.charAt(i);
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
    expect = vat.substr(8, 1);
    return total === expect;
  },
  rules: {
    regex: /^(CY)([0-59]\d{7}[A-Z])$/
  }
};
var czech_republic = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Legal entities
    if (this.rules.additional[0].test(vat)) {

      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 7; i++) {
        total += +vat.charAt(i) * this.rules.multipliers[i];
      }

      // Establish check digit.
      total = 11 - total % 11;
      if (total === 10) total = 0;
      if (total === 11) total = 1;

      // Compare it with the last character of the VAT number. If it's the same, then it's valid.
      expect = +vat.slice(7, 8);
      return total === expect;
    }

    // Individuals type 2
    else if (this.rules.additional[2].test(vat)) {

      // Extract the next digit and multiply by the counter.
      for (var j = 0; j < 7; j++) {
        total += +vat.charAt(j + 1) * this.rules.multipliers[j];
      }

      // Establish check digit.
      total = 11 - total % 11;
      if (total === 10) total = 0;
      if (total === 11) total = 1;

      // Convert calculated check digit according to a lookup table;
      expect = +vat.slice(8, 9);
      return this.rules.lookup[total - 1] === expect;
    }

    // Individuals type 3
    else if (this.rules.additional[3].test(vat)) {
      var temp = +vat.slice(0, 2) + vat.slice(2, 4) + vat.slice(4, 6) + vat.slice(6, 8) + vat.slice(8);
      expect = +vat % 11 === 0;
      return !!(temp % 11 === 0 && expect);
    }

    // else error
    return false;
  },
  rules: {
    multipliers: [
      8,
      7,
      6,
      5,
      4,
      3,
      2
    ],
    "lookup": [
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1,
      0,
      9,
      10
    ],
    regex: /^(CZ)(\d{8,10})(\d{3})?$/,
    additional: [
      /^\d{8}$/,
      /^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/,
      /^6\d{8}$/,
      /^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/
    ]
  }
};
COUNTRIES.denmark = {
  calcs: function(vat) {
    var total = 0;

    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    return total % 11 === 0;
  },
  rules: {
    multipliers: [
      2,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ],
    regex: /^(DK)(\d{8})$/
  }
};
COUNTRIES.estonia = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    // Establish check digits using modulus 10.
    total = 10 - total % 10;
    if (total === 10) total = 0;

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(8, 9);
    return total === expect;
  },
  rules: {
    multipliers: [
      3,
      7,
      1,
      3,
      7,
      1,
      3,
      7
    ],
    regex: /^(EE)(10\d{7})$/
  }
};
COUNTRIES.europe = {
  calcs: function(vat) {
    // We know little about EU numbers apart from the fact that the first 3 digits represent the
    // country, and that there are nine digits in total.
    return true;
  },
  rules: {
    regex: /^(EU)(\d{9})$/
  }
};
COUNTRIES.finland = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 7; i++) total += +vat.charAt(i) * this.rules.multipliers[i];

    // Establish check digit.
    total = 11 - total % 11;
    if (total > 9) {
      total = 0;
    }

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(7, 8);
    return total === expect;
  },
  rules: {
    multipliers: [
      7,
      9,
      10,
      5,
      8,
      4,
      2
    ],
    regex: /^(FI)(\d{8})$/
  }
};
COUNTRIES.france = {
  calcs: function(vat) {
    var total;
    var expect;

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
  rules: {
    regex: [
      /^(FR)(\d{11})$/,
      /^(FR)([A-HJ-NP-Z]\d{10})$/,
      /^(FR)(\d[A-HJ-NP-Z]\d{9})$/,
      /^(FR)([A-HJ-NP-Z]{2}\d{9})$/
    ]
  }
};
COUNTRIES.germany = {
  calcs: function(vat) {
    // Checks the check digits of a German VAT number.
    var product = 10;
    var sum = 0;
    var checkDigit = 0;
    var expect;

    for (var i = 0; i < 8; i++) {

      // Extract the next digit and implement peculiar algorithm!.
      sum = (+vat.charAt(i) + product) % 10;
      if (sum === 0) {
        sum = 10;
      }
      product = (2 * sum) % 11;
    }

    // Establish check digit.
    if (11 - product === 10) {
      checkDigit = 0;
    } else {
      checkDigit = 11 - product;
    }

    // Compare it with the last two characters of the VAT number. If the same, then it is a valid
    // check digit.
    expect = +vat.slice(8, 9);
    return checkDigit === expect;
  },
  rules: {
    regex: /^(DE)([1-9]\d{8})$/
  }
};
COUNTRIES.greece = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    //eight character numbers should be prefixed with an 0.
    if (vat.length === 8) {
      vat = '0' + vat;
    }

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    // Establish check digit.
    total = total % 11;
    if (total > 9) {
      total = 0;
    }

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(8, 9);
    return total === expect;
  },
  rules: {
    multipliers: [
      256,
      128,
      64,
      32,
      16,
      8,
      4,
      2
    ],
    regex: /^(EL)(\d{9})$/
  }
};
COUNTRIES.hungary = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    // Establish check digit.
    total = 10 - total % 10;
    if (total === 10) total = 0;

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(7, 8);
    return total === expect;
  },
  rules: {
    multipliers: [
      9,
      7,
      3,
      1,
      9,
      7,
      3
    ],
    regex: /^(HU)(\d{8})$/
  }
};
COUNTRIES.ireland = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // If the code is type 1 format, we need to convert it to the new before performing the validation.
    if (/^\d[A-Z\*\+]/.test(vat)) {
      vat = '0' + vat.substring(2, 7) + vat.substring(0, 1) + vat.substring(7, 8);
    }

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
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
  rules: {
    multipliers: [
      8,
      7,
      6,
      5,
      4,
      3,
      2
    ],
    regex: [
      /^(IE)(\d{7}[A-W])$/,
      /^(IE)([7-9][A-Z\*\+)]\d{5}[A-W])$/,
      /^(IE)(\d{7}[A-W][AH])$/
    ]
  }
};
COUNTRIES.italy = {
  calcs: function(vat) {
    var total = 0;
    var temp;
    var expect;

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
      temp = +vat.charAt(i) * this.rules.multipliers[i];
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
  rules: {
    multipliers: [
      1,
      2,
      1,
      2,
      1,
      2,
      1,
      2,
      1,
      2
    ],
    regex: /^(IT)(\d{11})$/
  }
};
COUNTRIES.latvia = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Differentiate between legal entities and natural bodies. For the latter we simply check that
    // the first six digits correspond to valid DDMMYY dates.
    if ((/^[0-3]/).test(vat)) {
      return !!(/^[0-3][0-9][0-1][0-9]/).test(vat);
    } else {

      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 10; i++) {
        total += +vat.charAt(i) * this.rules.multipliers[i];
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
  rules: {
    multipliers: [
      9,
      1,
      4,
      8,
      3,
      10,
      2,
      5,
      7,
      6
    ],
    regex: /^(LV)(\d{11})$/
  }
};
COUNTRIES.lithunia = {
  calcs: function(vat) {
    var total = 0;
    var expect;

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
          total += +vat.charAt(j) * this.rules.multipliers.short[j];
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
        total += +vat.charAt(k) * this.rules.multipliers.med[k];
      }

      // Can have a double check digit calculation!
      if (total % 11 === 10) {
        total = 0;
        for (var l = 0; l < 11; l++) {
          total += +vat.charAt(l) * this.rules.multipliers.alt[l];
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
  rules: {
    multipliers: {
      "short": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1
      ],
      "med": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1,
        2
      ],
      "alt": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        1,
        2,
        3,
        4
      ]
    },
    regex: /^(LT)(\d{9}|\d{12})$/
  }
};
COUNTRIES.luxembourg = {
  calcs: function(vat) {
    var expect = +vat.slice(6, 8);
    var checkDigit = +vat.slice(0, 6) % 89;
    // Checks the check digits of a Luxembourg VAT number.

    return checkDigit === expect;
  },
  rules: {
    regex: /^(LU)(\d{8})$/
  }
};
COUNTRIES.malta = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 6; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    // Establish check digits by getting modulus 37.
    total = 37 - total % 37;

    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    expect = +vat.slice(6, 8);
    return total === expect;
  },
  rules: {
    multipliers: [
      3,
      4,
      6,
      7,
      8,
      9
    ],
    regex: /^(MT)([1-9]\d{7})$/
  }
};
COUNTRIES.netherlands = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
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
  rules: {
    multipliers: [
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2
    ],
    regex: /^(NL)(\d{9})B\d{2}$/
  }
};
COUNTRIES.norway = {
  calcs: function(vat) {
    var total = 0;
    var expect;
    // See http://www.brreg.no/english/coordination/number.html

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
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
  rules: {
    multipliers: [
      3,
      2,
      7,
      6,
      5,
      4,
      3,
      2
    ],
    regex: /^(NO)(\d{9})$/
  }
};
COUNTRIES.poland = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 9; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
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
  rules: {
    multipliers: [
      6,
      5,
      7,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    regex: /^(PL)(\d{10})$/
  }
};
COUNTRIES.portugal = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
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
  rules: {
    multipliers: [
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2
    ],
    regex: /^(PT)(\d{9})$/
  }
};
COUNTRIES.romania = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Extract the next digit and multiply by the counter.
    var vatLength = vat.length;
    var multipliers = this.rules.multipliers.slice(10 - vatLength);

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
  rules: {
    multipliers: [
      7,
      5,
      3,
      2,
      1,
      7,
      5,
      3,
      2
    ],
    regex: /^(RO)([1-9]\d{1,9})$/
  }
};
COUNTRIES.russia = {
  calcs: function(vat) {
    var total = 0;
    var expect;
    var expect2;

    // Checks the check digits of a Russian INN number
    // See http://russianpartner.biz/test_inn.html for algorithm

    // 10 digit INN numbers
    if (vat.length === 10) {

      for (var i = 0; i < 10; i++) {
        total += +vat.charAt(i) * this.rules.multipliers.m_1[i];
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
        total1 += +vat.charAt(j) * this.rules.multipliers.m_2[j];
      }

      total1 = total1 % 11;
      if (total1 > 9) {
        total1 = total1 % 10;
      }

      for (var k = 0; k < 11; k++) {
        total2 += +vat.charAt(k) * this.rules.multipliers.m_3[k];
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
  rules: {
    multipliers: {
      "m_1": [
        2,
        4,
        10,
        3,
        5,
        9,
        4,
        6,
        8,
        0
      ],
      "m_2": [
        7,
        2,
        4,
        10,
        3,
        5,
        9,
        4,
        6,
        8,
        0
      ],
      "m_3": [
        3,
        7,
        2,
        4,
        10,
        3,
        5,
        9,
        4,
        6,
        8,
        0
      ]
    },
    regex: /^(RU)(\d{10}|\d{12})$/
  }
};
COUNTRIES.serbia = {
  calcs: function(vat) {
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
    var expect = 1;
    checkDigit = (product + (+vat.slice(8, 9))) % 10;
    return checkDigit === expect;
  },
  rules: {
    regex: /^(RS)(\d{9})$/
  }
};
COUNTRIES.slovakia_republic = {
  calcs: function(vat) {
    var expect = 0;
    var checkDigit = (vat % 11);
    return checkDigit === expect;
  },
  rules: {
    regex: /^(SK)([1-9]\d[2346-9]\d{7})$/
  }
};
COUNTRIES.slovenia = {
  calcs: function(vat) {
    var total = 0;
    var expect;

    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
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
  rules: {
    multipliers: [
      8,
      7,
      6,
      5,
      4,
      3,
      2
    ],
    regex: /^(SI)([1-9]\d{7})$/
  }
};
COUNTRIES.spain = {
  calcs: function(vat) {
    var i = 0;
    var total = 0;
    var temp;
    var expect;

    // National juridical entities
    if (this.rules.additional[0].test(vat)) {

      // Extract the next digit and multiply by the counter.
      for (i = 0; i < 7; i++) {
        temp = vat.charAt(i + 1) * this.rules.multipliers[i];
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
    else if (this.rules.additional[1].test(vat)) {

      // Extract the next digit and multiply by the counter.
      for (i = 0; i < 7; i++) {
        temp = vat.charAt(i + 1) * this.rules.multipliers[i];
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
    else if (this.rules.additional[2].test(vat)) {
      var tempnumber = vat;
      if (tempnumber.substring(0, 1) === 'Y') tempnumber = tempnumber.replace(/Y/, '1');
      if (tempnumber.substring(0, 1) === 'Z') tempnumber = tempnumber.replace(/Z/, '2');
      expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempnumber.substring(0, 8) % 23);
      return tempnumber.charAt(8) === expect;
    }

    // Personal number (NIF) (starting with K, L, M, or X)
    else if (this.rules.additional[3].test(vat)) {
      expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+vat.substring(1, 8) % 23);
      return vat.charAt(8) === expect;
    } else return false;
  },
  rules: {
    multipliers: [
      2,
      1,
      2,
      1,
      2,
      1,
      2
    ],
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
COUNTRIES.sweden = {
  calcs: function(vat) {
    var expect;

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
  rules: {
    regex: /^(SE)(\d{10}01)$/
  }
};
COUNTRIES.switzerland = {
  calcs: function(vat) {
    var total = 0;
    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    // Establish check digit.
    total = 11 - total % 11;
    if (total === 10) return false;
    if (total === 11) total = 0;

    // Check to see if the check digit given is correct, If not, we have an error with the VAT number
    expect = +vat.substr(8, 1);
    return total === expect;
  },
  rules: {
    multipliers: [
      5,
      4,
      3,
      2,
      7,
      6,
      5,
      4
    ],
    regex: /^(CHE)(\d{9})(MWST)?$/
  }
};
COUNTRIES.united_kingdom = {
  calcs: function(vat) {
    var total = 0;
    var expect;

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
      total += +vat.charAt(i) * this.rules.multipliers[i];
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
  rules: {
    multipliers: [
      8,
      7,
      6,
      5,
      4,
      3,
      2
    ],
    regex: [
      /^(GB)?(\d{9})$/,
      /^(GB)?(\d{12})$/,
      /^(GB)?(GD\d{3})$/,
      /^(GB)?(HA\d{3})$/
    ]
  }
};