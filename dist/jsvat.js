(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsvat"] = factory();
	else
		root["jsvat"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/countries/austria.js":
/*!**********************************!*\
  !*** ./src/countries/austria.js ***!
  \**********************************/
/*! exports provided: austria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "austria", function() { return austria; });
var austria = {
  name: 'Austria',
  codes: ['AT', 'AUT', '040'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var temp;

    for (var i = 0; i < 7; i++) {
      temp = vat.charAt(i) * this.rules.multipliers[i];

      if (temp > 9) {
        total += Math.floor(temp / 10) + temp % 10;
      } else {
        total += temp;
      }
    }

    total = 10 - (total + 4) % 10;
    if (total === 10) total = 0;
    return total === +vat.slice(7, 8);
  },
  rules: {
    multipliers: [1, 2, 1, 2, 1, 2, 1],
    regex: [/^(AT)U(\d{8})$/]
  }
};

/***/ }),

/***/ "./src/countries/belgium.js":
/*!**********************************!*\
  !*** ./src/countries/belgium.js ***!
  \**********************************/
/*! exports provided: belgium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "belgium", function() { return belgium; });
var belgium = {
  name: 'Belgium',
  codes: ['BE', 'BEL', '056'],
  calcFn: function calcFn(vat) {
    if (vat.length === 9) {
      vat = '0' + vat;
    }

    if (+vat.slice(1, 2) === 0) return false;
    var check = 97 - +vat.slice(0, 8) % 97;
    return check === +vat.slice(8, 10);
  },
  rules: {
    regex: [/^(BE)(0?\d{9})$/]
  }
};

/***/ }),

/***/ "./src/countries/bulgaria.js":
/*!***********************************!*\
  !*** ./src/countries/bulgaria.js ***!
  \***********************************/
/*! exports provided: bulgaria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bulgaria", function() { return bulgaria; });
var bulgaria = {
  name: 'Bulgaria',
  codes: ['BG', 'BGR', '100'],
  calcFn: function calcFn(vat) {
    function _increase(value, vat, from, to, incr) {
      for (var i = from; i < to; i++) {
        value += +vat.charAt(i) * (i + incr);
      }

      return value;
    }

    function _increase2(value, vat, from, to, multipliers) {
      for (var i = from; i < to; i++) {
        value += +vat.charAt(i) * multipliers[i];
      }

      return value;
    }

    function _checkNineLengthVat(vat) {
      var total;
      var temp = 0;
      var expect = +vat.slice(8);
      temp = _increase(temp, vat, 0, 8, 1);
      total = temp % 11;

      if (total !== 10) {
        return total === expect;
      }

      temp = _increase(0, vat, 0, 8, 3);
      total = temp % 11;
      if (total === 10) total = 0;
      return total === expect;
    }

    function _isPhysicalPerson(vat, rules) {
      // 10 digit VAT code - see if it relates to a standard physical person
      if (/^\d\d[0-5]\d[0-3]\d\d{4}$/.test(vat)) {
        // Check month
        var month = +vat.slice(2, 4);

        if (month > 0 && month < 13 || month > 20 && month < 33 || month > 40 && month < 53) {
          var total = _increase2(0, vat, 0, 9, rules.multipliers.physical); // Establish check digit.


          total = total % 11;
          if (total === 10) total = 0; // Check to see if the check digit given is correct, If not, try next type of person

          if (total === +vat.substr(9, 1)) return true;
        }
      }

      return false;
    }

    function _isForeigner(vat, rules) {
      // Extract the next digit and multiply by the counter.
      var total = _increase2(0, vat, 0, 9, rules.multipliers.foreigner); // Check to see if the check digit given is correct, If not, try next type of person


      if (total % 10 === +vat.substr(9, 1)) {
        return true;
      }
    }

    function _miscellaneousVAT(vat, rules) {
      // Finally, if not yet identified, see if it conforms to a miscellaneous VAT number
      var total = _increase2(0, vat, 0, 9, rules.multipliers.miscellaneous); // Establish check digit.


      total = 11 - total % 11;
      if (total === 10) return false;
      if (total === 11) total = 0; // Check to see if the check digit given is correct, If not, we have an error with the VAT number

      var expect = +vat.substr(9, 1);
      return total === expect;
    }

    if (vat.length === 9) {
      return _checkNineLengthVat(vat);
    } else {
      return _isPhysicalPerson(vat, this.rules) || _isForeigner(vat, this.rules) || _miscellaneousVAT(vat, this.rules);
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

/***/ }),

/***/ "./src/countries/croatia.js":
/*!**********************************!*\
  !*** ./src/countries/croatia.js ***!
  \**********************************/
/*! exports provided: croatia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "croatia", function() { return croatia; });
var croatia = {
  name: 'Croatia',
  codes: ['HR', 'HRV', '191'],
  calcFn: function calcFn(vat) {
    var expect; // Checks the check digits of a Croatian VAT number using ISO 7064, MOD 11-10 for check digit.

    var product = 10;
    var sum = 0;

    for (var i = 0; i < 10; i++) {
      // Extract the next digit and implement the algorithm
      sum = (+vat.charAt(i) + product) % 10;

      if (sum === 0) {
        sum = 10;
      }

      product = 2 * sum % 11;
    } // Now check that we have the right check digit


    expect = +vat.slice(10, 11);
    return (product + expect) % 10 === 1;
  },
  rules: {
    regex: [/^(HR)(\d{11})$/]
  }
};

/***/ }),

/***/ "./src/countries/cyprus.js":
/*!*********************************!*\
  !*** ./src/countries/cyprus.js ***!
  \*********************************/
/*! exports provided: cyprus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyprus", function() { return cyprus; });
var cyprus = {
  name: 'Cyprus',
  codes: ['CY', 'CYP', '196'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Not allowed to start with '12'

    if (+vat.slice(0, 2) === 12) return false; // Extract the next digit and multiply by the counter.

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
    } // Establish check digit using modulus 26, and translate to char. equivalent.


    total = total % 26;
    total = String.fromCharCode(total + 65); // Check to see if the check digit given is correct

    expect = vat.substr(8, 1);
    return total === expect;
  },
  rules: {
    regex: [/^(CY)([0-59]\d{7}[A-Z])$/]
  }
};

/***/ }),

/***/ "./src/countries/czech_republic.js":
/*!*****************************************!*\
  !*** ./src/countries/czech_republic.js ***!
  \*****************************************/
/*! exports provided: czech_republic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "czech_republic", function() { return czech_republic; });
var czech_republic = {
  name: 'Czech Republic',
  codes: ['CZ', 'CZE', '203'],
  calcFn: function calcFn(vat) {
    function _isLegalEntities(vat, rules) {
      var total = 0;

      if (rules.additional[0].test(vat)) {
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 7; i++) {
          total += +vat.charAt(i) * rules.multipliers[i];
        } // Establish check digit.


        total = 11 - total % 11;
        if (total === 10) total = 0;
        if (total === 11) total = 1; // Compare it with the last character of the VAT number. If it's the same, then it's valid.

        var expect = +vat.slice(7, 8);
        return total === expect;
      }

      return false;
    }

    function _isIndividualType1(vat, rules) {
      if (rules.additional[1].test(vat)) {
        var temp = +vat.slice(0, 2);

        if (temp > 62) {
          return false;
        } else {
          return true;
        }
      }
    }

    function _isIndividualType2(vat, rules) {
      var total = 0;

      if (rules.additional[2].test(vat)) {
        // Extract the next digit and multiply by the counter.
        for (var j = 0; j < 7; j++) {
          total += +vat.charAt(j + 1) * rules.multipliers[j];
        } // Establish check digit.


        total = 11 - total % 11;
        if (total === 10) total = 0;
        if (total === 11) total = 1; // Convert calculated check digit according to a lookup table

        var expect = +vat.slice(8, 9);
        return rules.lookup[total - 1] === expect;
      }

      return false;
    }

    function _isIndividualType3(vat, rules) {
      if (rules.additional[3].test(vat)) {
        var temp = +vat.slice(0, 2) + vat.slice(2, 4) + vat.slice(4, 6) + vat.slice(6, 8) + vat.slice(8);
        var expect = +vat % 11 === 0;
        return !!(temp % 11 === 0 && expect);
      }

      return false;
    }

    if (_isLegalEntities(vat, this.rules)) return true;
    if (_isIndividualType2(vat, this.rules)) return true;
    if (_isIndividualType3(vat, this.rules)) return true;
    if (_isIndividualType1(vat, this.rules)) return true;
    return false;
  },
  rules: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    lookup: [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10],
    regex: [/^(CZ)(\d{8,10})(\d{3})?$/],
    additional: [/^\d{8}$/, /^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/, /^6\d{8}$/, /^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/]
  }
};

/***/ }),

/***/ "./src/countries/denmark.js":
/*!**********************************!*\
  !*** ./src/countries/denmark.js ***!
  \**********************************/
/*! exports provided: denmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "denmark", function() { return denmark; });
var denmark = {
  name: 'Denmark',
  codes: ['DK', 'DNK', '208'],
  calcFn: function calcFn(vat) {
    var total = 0;

    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    }

    return total % 11 === 0;
  },
  rules: {
    multipliers: [2, 7, 6, 5, 4, 3, 2, 1],
    regex: [/^(DK)(\d{8})$/]
  }
};

/***/ }),

/***/ "./src/countries/estonia.js":
/*!**********************************!*\
  !*** ./src/countries/estonia.js ***!
  \**********************************/
/*! exports provided: estonia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estonia", function() { return estonia; });
var estonia = {
  name: 'Estonia',
  codes: ['EE', 'EST', '233'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digits using modulus 10.


    total = 10 - total % 10;
    if (total === 10) total = 0; // Compare it with the last character of the VAT number. If it's the same, then it's valid.

    expect = +vat.slice(8, 9);
    return total === expect;
  },
  rules: {
    multipliers: [3, 7, 1, 3, 7, 1, 3, 7],
    regex: [/^(EE)(10\d{7})$/]
  }
};

/***/ }),

/***/ "./src/countries/europe.js":
/*!*********************************!*\
  !*** ./src/countries/europe.js ***!
  \*********************************/
/*! exports provided: europe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "europe", function() { return europe; });
var europe = {
  name: 'Europe',
  codes: ['EU', 'EUR', '000'],
  // TODO (S.Panfilov) that's not a real codes
  calcFn: function calcFn() {
    // We know little about EU numbers apart from the fact that the first 3 digits represent the
    // country, and that there are nine digits in total.
    return true;
  },
  rules: {
    regex: [/^(EU)(\d{9})$/]
  }
};

/***/ }),

/***/ "./src/countries/finland.js":
/*!**********************************!*\
  !*** ./src/countries/finland.js ***!
  \**********************************/
/*! exports provided: finland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finland", function() { return finland; });
var finland = {
  name: 'Finland',
  codes: ['FI', 'FIN', '246'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digit.


    total = 11 - total % 11;

    if (total > 9) {
      total = 0;
    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.


    expect = +vat.slice(7, 8);
    return total === expect;
  },
  rules: {
    multipliers: [7, 9, 10, 5, 8, 4, 2],
    regex: [/^(FI)(\d{8})$/]
  }
};

/***/ }),

/***/ "./src/countries/france.js":
/*!*********************************!*\
  !*** ./src/countries/france.js ***!
  \*********************************/
/*! exports provided: france */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "france", function() { return france; });
var france = {
  name: 'France',
  codes: ['FR', 'FRA', '250'],
  calcFn: function calcFn(vat) {
    var total;
    var expect; // Checks the check digits of a French VAT number.

    if (!/^\d{11}$/.test(vat)) {
      return true;
    } // Extract the last nine digits as an integer.


    total = +vat.substring(2); // Establish check digit.

    total = (total * 100 + 12) % 97; // Compare it with the last character of the VAT number. If it's the same, then it's valid.

    expect = +vat.slice(0, 2);
    return total === expect;
  },
  rules: {
    regex: [/^(FR)(\d{11})$/, /^(FR)([A-HJ-NP-Z]\d{10})$/, /^(FR)(\d[A-HJ-NP-Z]\d{9})$/, /^(FR)([A-HJ-NP-Z]{2}\d{9})$/]
  }
};

/***/ }),

/***/ "./src/countries/germany.js":
/*!**********************************!*\
  !*** ./src/countries/germany.js ***!
  \**********************************/
/*! exports provided: germany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "germany", function() { return germany; });
var germany = {
  name: 'Germany',
  codes: ['DE', 'DEU', '276'],
  calcFn: function calcFn(vat) {
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

      product = 2 * sum % 11;
    } // Establish check digit.


    if (11 - product === 10) {
      checkDigit = 0;
    } else {
      checkDigit = 11 - product;
    } // Compare it with the last two characters of the VAT number. If the same, then it is a valid
    // check digit.


    expect = +vat.slice(8, 9);
    return checkDigit === expect;
  },
  rules: {
    regex: [/^(DE)([1-9]\d{8})$/]
  }
};

/***/ }),

/***/ "./src/countries/greece.js":
/*!*********************************!*\
  !*** ./src/countries/greece.js ***!
  \*********************************/
/*! exports provided: greece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greece", function() { return greece; });
var greece = {
  name: 'Greece',
  codes: ['GR', 'GRC', '300'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // eight character numbers should be prefixed with an 0.

    if (vat.length === 8) {
      vat = '0' + vat;
    } // Extract the next digit and multiply by the counter.


    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digit.


    total = total % 11;

    if (total > 9) {
      total = 0;
    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.


    expect = +vat.slice(8, 9);
    return total === expect;
  },
  rules: {
    multipliers: [256, 128, 64, 32, 16, 8, 4, 2],
    regex: [/^(EL)(\d{9})$/]
  }
};

/***/ }),

/***/ "./src/countries/hungary.js":
/*!**********************************!*\
  !*** ./src/countries/hungary.js ***!
  \**********************************/
/*! exports provided: hungary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hungary", function() { return hungary; });
var hungary = {
  name: 'Hungary',
  codes: ['HU', 'HUN', '348'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digit.


    total = 10 - total % 10;
    if (total === 10) total = 0; // Compare it with the last character of the VAT number. If it's the same, then it's valid.

    expect = +vat.slice(7, 8);
    return total === expect;
  },
  rules: {
    multipliers: [9, 7, 3, 1, 9, 7, 3],
    regex: [/^(HU)(\d{8})$/]
  }
};

/***/ }),

/***/ "./src/countries/ireland.js":
/*!**********************************!*\
  !*** ./src/countries/ireland.js ***!
  \**********************************/
/*! exports provided: ireland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ireland", function() { return ireland; });
var ireland = {
  name: 'Ireland',
  codes: ['IE', 'IRL', '372'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // If the code is type 1 format, we need to convert it to the new before performing the validation.

    if (this.rules.typeFormats.first.test(vat)) {
      vat = '0' + vat.substring(2, 7) + vat.substring(0, 1) + vat.substring(7, 8);
    } // Extract the next digit and multiply by the counter.


    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // If the number is type 3 then we need to include the trailing A or H in the calculation


    if (this.rules.typeFormats.third.test(vat)) {
      // Add in a multiplier for the character A (1*9=9) or H (8*9=72)
      if (vat.charAt(8) === 'H') {
        total += 72;
      } else {
        total += 9;
      }
    } // Establish check digit using modulus 23, and translate to char. equivalent.


    total = total % 23;

    if (total === 0) {
      total = 'W';
    } else {
      total = String.fromCharCode(total + 64);
    } // Compare it with the eighth character of the VAT number. If it's the same, then it's valid.


    expect = vat.slice(7, 8);
    return total === expect;
  },
  rules: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    typeFormats: {
      first: /^\d[A-Z*+]/,
      third: /^\d{7}[A-Z][AH]$/
    },
    regex: [/^(IE)(\d{7}[A-W])$/, /^(IE)([7-9][A-Z*+)]\d{5}[A-W])$/, /^(IE)(\d{7}[A-W][AH])$/]
  }
};

/***/ }),

/***/ "./src/countries/italy.js":
/*!********************************!*\
  !*** ./src/countries/italy.js ***!
  \********************************/
/*! exports provided: italy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "italy", function() { return italy; });
var italy = {
  name: 'Italy',
  codes: ['IT', 'ITA', '380'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var temp;
    var expect; // The last three digits are the issuing office, and cannot exceed more 201, unless 999 or 888

    if (+vat.slice(0, 7) === 0) {
      return false;
    }

    temp = +vat.slice(7, 10);

    if (temp < 1 || temp > 201 && temp !== 999 && temp !== 888) {
      return false;
    } // Extract the next digit and multiply by the appropriate


    for (var i = 0; i < 10; i++) {
      temp = +vat.charAt(i) * this.rules.multipliers[i];
      if (temp > 9) total += Math.floor(temp / 10) + temp % 10;else total += temp;
    } // Establish check digit.


    total = 10 - total % 10;

    if (total > 9) {
      total = 0;
    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.


    expect = +vat.slice(10, 11);
    return total === expect;
  },
  rules: {
    multipliers: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    regex: [/^(IT)(\d{11})$/]
  }
};

/***/ }),

/***/ "./src/countries/latvia.js":
/*!*********************************!*\
  !*** ./src/countries/latvia.js ***!
  \*********************************/
/*! exports provided: latvia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latvia", function() { return latvia; });
var latvia = {
  name: 'Latvia',
  codes: ['LV', 'LVA', '428'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Differentiate between legal entities and natural bodies. For the latter we simply check that
    // the first six digits correspond to valid DDMMYY dates.

    if (/^[0-3]/.test(vat)) {
      return !!/^[0-3][0-9][0-1][0-9]/.test(vat);
    } else {
      // Extract the next digit and multiply by the counter.
      for (var i = 0; i < 10; i++) {
        total += +vat.charAt(i) * this.rules.multipliers[i];
      } // Establish check digits by getting modulus 11.


      if (total % 11 === 4 && vat[0] === 9) total = total - 45;

      if (total % 11 === 4) {
        total = 4 - total % 11;
      } else if (total % 11 > 4) {
        total = 14 - total % 11;
      } else if (total % 11 < 4) {
        total = 3 - total % 11;
      } // Compare it with the last character of the VAT number. If it's the same, then it's valid.


      expect = +vat.slice(10, 11);
      return total === expect;
    }
  },
  rules: {
    multipliers: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6],
    regex: [/^(LV)(\d{11})$/]
  }
};

/***/ }),

/***/ "./src/countries/lithuania.js":
/*!************************************!*\
  !*** ./src/countries/lithuania.js ***!
  \************************************/
/*! exports provided: lithuania */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lithuania", function() { return lithuania; });
var lithuania = {
  name: 'Lithuania',
  codes: ['LT', 'LTU', '440'],
  calcFn: function calcFn(vat) {
    function _extractDigit(vat, multiplier, key) {
      return +vat.charAt(key) * multiplier[key];
    }

    function _doubleCheckCalculation(vat, total, rules) {
      if (total % 11 === 10) {
        total = 0;

        for (var i = 0; i < 8; i++) {
          total += _extractDigit(vat, rules.multipliers["short"], i);
        }
      }

      return total;
    }

    function extractDigit(vat, total) {
      for (var i = 0; i < 8; i++) {
        total += +vat.charAt(i) * (i + 1);
      }

      return total;
    }

    function checkDigit(total) {
      total = total % 11;

      if (total === 10) {
        total = 0;
      }

      return total;
    }

    function _check9DigitVat(vat, rules) {
      // 9 character VAT numbers are for legal persons
      var total = 0;

      if (vat.length === 9) {
        // 8th character must be one
        if (!/^\d{7}1/.test(vat)) return false; // Extract the next digit and multiply by the counter+1.

        total = extractDigit(vat, total); // Can have a double check digit calculation!

        total = _doubleCheckCalculation(vat, total, rules); // Establish check digit.

        total = checkDigit(total); // Compare it with the last character of the VAT number. If it's the same, then it's valid.

        var expect = +vat.slice(8, 9);
        return total === expect;
      }

      return false;
    }

    function extractDigit12(vat, total, rules) {
      for (var k = 0; k < 11; k++) {
        total += _extractDigit(vat, rules.multipliers.med, k);
      }

      return total;
    }

    function _doubleCheckCalculation12(vat, total, rules) {
      if (total % 11 === 10) {
        total = 0;

        for (var l = 0; l < 11; l++) {
          total += _extractDigit(vat, rules.multipliers.alt, l);
        }
      }

      return total;
    }

    function _check12DigitVat(vat, rules) {
      var total = 0; // 12 character VAT numbers are for temporarily registered taxpayers

      if (vat.length === 12) {
        // 11th character must be one
        if (!rules.check.test(vat)) return false; // Extract the next digit and multiply by the counter+1.

        total = extractDigit12(vat, total, rules); // Can have a double check digit calculation!

        total = _doubleCheckCalculation12(vat, total, rules); // Establish check digit.

        total = checkDigit(total); // Compare it with the last character of the VAT number. If it's the same, then it's valid.

        var expect = +vat.slice(11, 12);
        return total === expect;
      }

      return false;
    }

    return _check9DigitVat(vat, this.rules) || _check12DigitVat(vat, this.rules);
  },
  rules: {
    multipliers: {
      "short": [3, 4, 5, 6, 7, 8, 9, 1],
      med: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
      alt: [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]
    },
    check: /^\d{10}1/,
    regex: [/^(LT)(\d{9}|\d{12})$/]
  }
};

/***/ }),

/***/ "./src/countries/luxembourg.js":
/*!*************************************!*\
  !*** ./src/countries/luxembourg.js ***!
  \*************************************/
/*! exports provided: luxembourg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "luxembourg", function() { return luxembourg; });
var luxembourg = {
  name: 'Luxembourg',
  codes: ['LU', 'LUX', '442'],
  calcFn: function calcFn(vat) {
    var expect = +vat.slice(6, 8);
    var checkDigit = +vat.slice(0, 6) % 89; // Checks the check digits of a Luxembourg VAT number.

    return checkDigit === expect;
  },
  rules: {
    regex: [/^(LU)(\d{8})$/]
  }
};

/***/ }),

/***/ "./src/countries/malta.js":
/*!********************************!*\
  !*** ./src/countries/malta.js ***!
  \********************************/
/*! exports provided: malta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "malta", function() { return malta; });
var malta = {
  name: 'Malta',
  codes: ['MT', 'MLT', '470'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 6; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digits by getting modulus 37.


    total = 37 - total % 37; // Compare it with the last character of the VAT number. If it's the same, then it's valid.

    expect = +vat.slice(6, 8);
    return total === expect;
  },
  rules: {
    multipliers: [3, 4, 6, 7, 8, 9],
    regex: [/^(MT)([1-9]\d{7})$/]
  }
};

/***/ }),

/***/ "./src/countries/netherlands.js":
/*!**************************************!*\
  !*** ./src/countries/netherlands.js ***!
  \**************************************/
/*! exports provided: netherlands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "netherlands", function() { return netherlands; });
var netherlands = {
  name: 'Netherlands',
  codes: ['NL', 'NLD', '528'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digits by getting modulus 11.


    total = total % 11;

    if (total > 9) {
      total = 0;
    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.


    expect = +vat.slice(8, 9);
    return total === expect;
  },
  rules: {
    multipliers: [9, 8, 7, 6, 5, 4, 3, 2],
    regex: [/^(NL)(\d{9})B\d{2}$/]
  }
};

/***/ }),

/***/ "./src/countries/norway.js":
/*!*********************************!*\
  !*** ./src/countries/norway.js ***!
  \*********************************/
/*! exports provided: norway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "norway", function() { return norway; });
var norway = {
  name: 'Norway',
  codes: ['NO', 'NOR', '578'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // See http://www.brreg.no/english/coordination/number.html
    // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digits by getting modulus 11. Check digits > 9 are invalid


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
    multipliers: [3, 2, 7, 6, 5, 4, 3, 2],
    regex: [/^(NO)(\d{9})$/]
  }
};

/***/ }),

/***/ "./src/countries/poland.js":
/*!*********************************!*\
  !*** ./src/countries/poland.js ***!
  \*********************************/
/*! exports provided: poland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poland", function() { return poland; });
var poland = {
  name: 'Poland',
  codes: ['PL', 'POL', '616'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 9; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digits subtracting modulus 11 from 11.


    total = total % 11;

    if (total > 9) {
      total = 0;
    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.


    expect = +vat.slice(9, 10);
    return total === expect;
  },
  rules: {
    multipliers: [6, 5, 7, 2, 3, 4, 5, 6, 7],
    regex: [/^(PL)(\d{10})$/]
  }
};

/***/ }),

/***/ "./src/countries/portugal.js":
/*!***********************************!*\
  !*** ./src/countries/portugal.js ***!
  \***********************************/
/*! exports provided: portugal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portugal", function() { return portugal; });
var portugal = {
  name: 'Portugal',
  codes: ['PT', 'PRT', '620'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digits subtracting modulus 11 from 11.


    total = 11 - total % 11;

    if (total > 9) {
      total = 0;
    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.


    expect = +vat.slice(8, 9);
    return total === expect;
  },
  rules: {
    multipliers: [9, 8, 7, 6, 5, 4, 3, 2],
    regex: [/^(PT)(\d{9})$/]
  }
};

/***/ }),

/***/ "./src/countries/romania.js":
/*!**********************************!*\
  !*** ./src/countries/romania.js ***!
  \**********************************/
/*! exports provided: romania */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "romania", function() { return romania; });
var romania = {
  name: 'Romania',
  codes: ['RO', 'ROU', '642'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Extract the next digit and multiply by the counter.

    var vatLength = vat.length;
    var multipliers = this.rules.multipliers.slice(10 - vatLength);

    for (var i = 0; i < vat.length - 1; i++) {
      total += +vat.charAt(i) * multipliers[i];
    } // Establish check digits by getting modulus 11.


    total = 10 * total % 11;
    if (total === 10) total = 0; // Compare it with the last character of the VAT number. If it's the same, then it's valid.

    expect = +vat.slice(vat.length - 1, vat.length);
    return total === expect;
  },
  rules: {
    multipliers: [7, 5, 3, 2, 1, 7, 5, 3, 2],
    regex: [/^(RO)([1-9]\d{1,9})$/]
  }
};

/***/ }),

/***/ "./src/countries/russia.js":
/*!*********************************!*\
  !*** ./src/countries/russia.js ***!
  \*********************************/
/*! exports provided: russia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "russia", function() { return russia; });
var russia = {
  name: 'Russian Federation',
  codes: ['RU', 'RUS', '643'],
  calcFn: function calcFn(vat) {
    function _check10DigitINN(vat, rules) {
      var total = 0;

      if (vat.length === 10) {
        for (var i = 0; i < 10; i++) {
          total += +vat.charAt(i) * rules.multipliers.m_1[i];
        }

        total = total % 11;

        if (total > 9) {
          total = total % 10;
        } // Compare it with the last character of the VAT number. If it is the same, then it's valid


        var expect = +vat.slice(9, 10);
        return total === expect;
      }

      return false;
    }

    function _check12DigitINN(vat, rules) {
      var total1 = 0;
      var total2 = 0;

      if (vat.length === 12) {
        for (var j = 0; j < 11; j++) {
          total1 += +vat.charAt(j) * rules.multipliers.m_2[j];
        }

        total1 = total1 % 11;

        if (total1 > 9) {
          total1 = total1 % 10;
        }

        for (var k = 0; k < 11; k++) {
          total2 += +vat.charAt(k) * rules.multipliers.m_3[k];
        }

        total2 = total2 % 11;

        if (total2 > 9) {
          total2 = total2 % 10;
        } // Compare the first check with the 11th character and the second check with the 12th and last
        // character of the VAT number. If they're both the same, then it's valid


        var expect = total1 === +vat.slice(10, 11);
        var expect2 = total2 === +vat.slice(11, 12);
        return expect && expect2;
      }

      return false;
    } // See http://russianpartner.biz/test_inn.html for algorithm


    return _check10DigitINN(vat, this.rules) || _check12DigitINN(vat, this.rules);
  },
  rules: {
    multipliers: {
      m_1: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
      m_2: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
      m_3: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]
    },
    regex: [/^(RU)(\d{10}|\d{12})$/]
  }
};

/***/ }),

/***/ "./src/countries/serbia.js":
/*!*********************************!*\
  !*** ./src/countries/serbia.js ***!
  \*********************************/
/*! exports provided: serbia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serbia", function() { return serbia; });
var serbia = {
  name: 'Serbia',
  codes: ['RS', 'SRB', '688'],
  calcFn: function calcFn(vat) {
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

      product = 2 * sum % 11;
    } // Now check that we have the right check digit


    var expect = 1;
    checkDigit = (product + +vat.slice(8, 9)) % 10;
    return checkDigit === expect;
  },
  rules: {
    regex: [/^(RS)(\d{9})$/]
  }
};

/***/ }),

/***/ "./src/countries/slovakia_republic.js":
/*!********************************************!*\
  !*** ./src/countries/slovakia_republic.js ***!
  \********************************************/
/*! exports provided: slovakia_republic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slovakia_republic", function() { return slovakia_republic; });
// eslint-disable-next-line camelcase
var slovakia_republic = {
  name: 'Slovakia_Republic',
  codes: ['SK', 'SVK', '703'],
  calcFn: function calcFn(vat) {
    var expect = 0;
    var checkDigit = vat % 11;
    return checkDigit === expect;
  },
  rules: {
    regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
  }
};

/***/ }),

/***/ "./src/countries/slovenia.js":
/*!***********************************!*\
  !*** ./src/countries/slovenia.js ***!
  \***********************************/
/*! exports provided: slovenia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slovenia", function() { return slovenia; });
var slovenia = {
  name: 'Slovenia',
  codes: ['SI', 'SVN', '705'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digits using modulus 11


    total = 11 - total % 11;

    if (total === 10) {
      total = 0;
    } // Compare the number with the last character of the VAT number. If it is the
    // same, then it's a valid check digit.


    expect = +vat.slice(7, 8);
    return !!(total !== 11 && total === expect);
  },
  rules: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    regex: [/^(SI)([1-9]\d{7})$/]
  }
};

/***/ }),

/***/ "./src/countries/spain.js":
/*!********************************!*\
  !*** ./src/countries/spain.js ***!
  \********************************/
/*! exports provided: spain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spain", function() { return spain; });
var spain = {
  name: 'Spain',
  codes: ['ES', 'ESP', '724'],
  calcFn: function calcFn(vat) {
    var i = 0;
    var total = 0;
    var temp;
    var expect; // National juridical entities

    if (this.rules.additional[0].test(vat)) {
      // Extract the next digit and multiply by the counter.
      for (i = 0; i < 7; i++) {
        temp = vat.charAt(i + 1) * this.rules.multipliers[i];
        if (temp > 9) total += Math.floor(temp / 10) + temp % 10;else total += temp;
      } // Now calculate the check digit itself.


      total = 10 - total % 10;

      if (total === 10) {
        total = 0;
      } // Compare it with the last character of the VAT number. If it's the same, then it's valid.


      expect = +vat.slice(8, 9);
      return total === expect;
    } else if (this.rules.additional[1].test(vat)) {
      // Juridical entities other than national ones
      // Extract the next digit and multiply by the counter.
      for (i = 0; i < 7; i++) {
        temp = vat.charAt(i + 1) * this.rules.multipliers[i];
        if (temp > 9) total += Math.floor(temp / 10) + temp % 10;else total += temp;
      } // Now calculate the check digit itself.


      total = 10 - total % 10;
      total = String.fromCharCode(total + 64); // Compare it with the last character of the VAT number. If it's the same, then it's valid.

      expect = vat.slice(8, 9);
      return total === expect;
    } else if (this.rules.additional[2].test(vat)) {
      // Personal number (NIF) (starting with numeric of Y or Z)
      var tempnumber = vat;
      if (tempnumber.substring(0, 1) === 'Y') tempnumber = tempnumber.replace(/Y/, '1');
      if (tempnumber.substring(0, 1) === 'Z') tempnumber = tempnumber.replace(/Z/, '2');
      expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempnumber.substring(0, 8) % 23);
      return tempnumber.charAt(8) === expect;
    } else if (this.rules.additional[3].test(vat)) {
      // Personal number (NIF) (starting with K, L, M, or X)
      expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+vat.substring(1, 8) % 23);
      return vat.charAt(8) === expect;
    } else return false;
  },
  rules: {
    multipliers: [2, 1, 2, 1, 2, 1, 2],
    regex: [/^(ES)([A-Z]\d{8})$/, /^(ES)([A-HN-SW]\d{7}[A-J])$/, /^(ES)([0-9YZ]\d{7}[A-Z])$/, /^(ES)([KLMX]\d{7}[A-Z])$/],
    additional: [/^[A-H|J|U|V]\d{8}$/, /^[A-H|N-S|W]\d{7}[A-J]$/, /^[0-9|Y|Z]\d{7}[A-Z]$/, /^[K|L|M|X]\d{7}[A-Z]$/]
  }
};

/***/ }),

/***/ "./src/countries/sweden.js":
/*!*********************************!*\
  !*** ./src/countries/sweden.js ***!
  \*********************************/
/*! exports provided: sweden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sweden", function() { return sweden; });
var sweden = {
  name: 'Sweden',
  codes: ['SE', 'SWE', '752'],
  calcFn: function calcFn(vat) {
    var expect; // Calculate R where R = R1 + R3 + R5 + R7 + R9, and Ri = INT(Ci/5) + (Ci*2) modulo 10

    var R = 0;
    var digit;

    for (var i = 0; i < 9; i = i + 2) {
      digit = +vat.charAt(i);
      R += Math.floor(digit / 5) + digit * 2 % 10;
    } // Calculate S where S = C2 + C4 + C6 + C8


    var S = 0;

    for (var j = 1; j < 9; j = j + 2) {
      S += +vat.charAt(j);
    }

    var checkDigit = (10 - (R + S) % 10) % 10; // Compare it with the last character of the VAT number. If it's the same, then it's valid.

    expect = +vat.slice(9, 10);
    return checkDigit === expect;
  },
  rules: {
    regex: [/^(SE)(\d{10}01)$/]
  }
};

/***/ }),

/***/ "./src/countries/switzerland.js":
/*!**************************************!*\
  !*** ./src/countries/switzerland.js ***!
  \**************************************/
/*! exports provided: switzerland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switzerland", function() { return switzerland; });
var switzerland = {
  name: 'Switzerland',
  codes: ['CH', 'CHE', '756'],
  calcFn: function calcFn(vat) {
    var total = 0;

    for (var i = 0; i < 8; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Establish check digit.


    total = 11 - total % 11;
    if (total === 10) return false;
    if (total === 11) total = 0; // Check to see if the check digit given is correct, If not, we have an error with the VAT number

    var expect = +vat.substr(8, 1);
    return total === expect;
  },
  rules: {
    multipliers: [5, 4, 3, 2, 7, 6, 5, 4],
    regex: [/^(CHE)(\d{9})(MWST)?$/]
  }
};

/***/ }),

/***/ "./src/countries/united_kingdom.js":
/*!*****************************************!*\
  !*** ./src/countries/united_kingdom.js ***!
  \*****************************************/
/*! exports provided: united_kingdom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "united_kingdom", function() { return united_kingdom; });
// eslint-disable-next-line camelcase
var united_kingdom = {
  name: 'United Kingdom',
  codes: ['GB', 'GBR', '826'],
  calcFn: function calcFn(vat) {
    var total = 0;
    var expect; // Government departments

    if (vat.substr(0, 2) === 'GD') {
      expect = 500;
      return vat.substr(2, 3) < expect;
    } // Health authorities


    if (vat.substr(0, 2) === 'HA') {
      expect = 499;
      return vat.substr(2, 3) > expect;
    } // Standard and commercial numbers
    // 0 VAT numbers disallowed!


    if (+vat.slice(0) === 0) return false; // Check range is OK for modulus 97 calculation

    var no = +vat.slice(0, 7); // Extract the next digit and multiply by the counter.

    for (var i = 0; i < 7; i++) {
      total += +vat.charAt(i) * this.rules.multipliers[i];
    } // Old numbers use a simple 97 modulus, but new numbers use an adaptation of that (less 55). Our
    // VAT number could use either system, so we check it against both.
    // Establish check digits by subtracting 97 from total until negative.


    var checkDigit = total;

    while (checkDigit > 0) {
      checkDigit = checkDigit - 97;
    } // Get the absolute value and compare it with the last two characters of the VAT number. If the
    // same, then it is a valid traditional check digit. However, even then the number must fit within
    // certain specified ranges.


    checkDigit = Math.abs(checkDigit);
    if (checkDigit === +vat.slice(7, 9) && no < 9990001 && (no < 100000 || no > 999999) && (no < 9490001 || no > 9700000)) return true; // Now try the new method by subtracting 55 from the check digit if we can - else add 42

    if (checkDigit >= 55) checkDigit = checkDigit - 55;else checkDigit = checkDigit + 42;
    expect = +vat.slice(7, 9);
    return !!(checkDigit === expect && no > 1000000);
  },
  rules: {
    multipliers: [8, 7, 6, 5, 4, 3, 2],
    regex: [/^(GB)?(\d{9})$/, /^(GB)?(\d{12})$/, /^(GB)?(GD\d{3})$/, /^(GB)?(HA\d{3})$/]
  }
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: blocked, allowed, countries, checkVAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blocked", function() { return blocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowed", function() { return allowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkVAT", function() { return checkVAT; });
/* harmony import */ var _countries_austria_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries/austria.js */ "./src/countries/austria.js");
/* harmony import */ var _countries_belgium_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries/belgium.js */ "./src/countries/belgium.js");
/* harmony import */ var _countries_bulgaria_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries/bulgaria.js */ "./src/countries/bulgaria.js");
/* harmony import */ var _countries_croatia_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries/croatia.js */ "./src/countries/croatia.js");
/* harmony import */ var _countries_cyprus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countries/cyprus.js */ "./src/countries/cyprus.js");
/* harmony import */ var _countries_czech_republic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countries/czech_republic.js */ "./src/countries/czech_republic.js");
/* harmony import */ var _countries_denmark_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./countries/denmark.js */ "./src/countries/denmark.js");
/* harmony import */ var _countries_estonia_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./countries/estonia.js */ "./src/countries/estonia.js");
/* harmony import */ var _countries_europe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./countries/europe.js */ "./src/countries/europe.js");
/* harmony import */ var _countries_finland_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./countries/finland.js */ "./src/countries/finland.js");
/* harmony import */ var _countries_france_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./countries/france.js */ "./src/countries/france.js");
/* harmony import */ var _countries_germany_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./countries/germany.js */ "./src/countries/germany.js");
/* harmony import */ var _countries_greece_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./countries/greece.js */ "./src/countries/greece.js");
/* harmony import */ var _countries_hungary_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./countries/hungary.js */ "./src/countries/hungary.js");
/* harmony import */ var _countries_ireland_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./countries/ireland.js */ "./src/countries/ireland.js");
/* harmony import */ var _countries_italy_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./countries/italy.js */ "./src/countries/italy.js");
/* harmony import */ var _countries_latvia_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./countries/latvia.js */ "./src/countries/latvia.js");
/* harmony import */ var _countries_lithuania_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./countries/lithuania.js */ "./src/countries/lithuania.js");
/* harmony import */ var _countries_luxembourg_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./countries/luxembourg.js */ "./src/countries/luxembourg.js");
/* harmony import */ var _countries_malta_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./countries/malta.js */ "./src/countries/malta.js");
/* harmony import */ var _countries_netherlands_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./countries/netherlands.js */ "./src/countries/netherlands.js");
/* harmony import */ var _countries_norway_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./countries/norway.js */ "./src/countries/norway.js");
/* harmony import */ var _countries_poland_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./countries/poland.js */ "./src/countries/poland.js");
/* harmony import */ var _countries_portugal_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./countries/portugal.js */ "./src/countries/portugal.js");
/* harmony import */ var _countries_romania_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./countries/romania.js */ "./src/countries/romania.js");
/* harmony import */ var _countries_russia_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./countries/russia.js */ "./src/countries/russia.js");
/* harmony import */ var _countries_serbia_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./countries/serbia.js */ "./src/countries/serbia.js");
/* harmony import */ var _countries_slovakia_republic_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./countries/slovakia_republic.js */ "./src/countries/slovakia_republic.js");
/* harmony import */ var _countries_slovenia_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./countries/slovenia.js */ "./src/countries/slovenia.js");
/* harmony import */ var _countries_spain_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./countries/spain.js */ "./src/countries/spain.js");
/* harmony import */ var _countries_sweden_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./countries/sweden.js */ "./src/countries/sweden.js");
/* harmony import */ var _countries_switzerland_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./countries/switzerland.js */ "./src/countries/switzerland.js");
/* harmony import */ var _countries_united_kingdom_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./countries/united_kingdom.js */ "./src/countries/united_kingdom.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // eslint-disable-next-line camelcase






















 // eslint-disable-next-line camelcase





 // eslint-disable-next-line camelcase



function Result(vat, isValid, country) {
  this.value = vat || null;
  this.isValid = !!isValid;

  if (country) {
    this.country = {
      name: country.name,
      isoCode: {
        "short": country.codes[0],
        "long": country.codes[1],
        numeric: country.codes[2]
      }
    };
  }
}

function removeExtraChars(vat) {
  vat = vat || '';
  return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
}

function isValEqToCode(val, codes) {
  return val === codes[0] || val === codes[1] || val === codes[2];
}

function isInList(list, country) {
  if (!list) return false;

  for (var i = 0; i < list.length; i++) {
    var val = list[i].toUpperCase();
    if (val === country.name.toUpperCase()) return true;
    if (isValEqToCode(val, country.codes)) return true;
  }

  return false;
}

function isBlocked(country, blocked, allowed) {
  var isBlocked = isInList(blocked, country);
  if (isBlocked) return true;
  var isAllowed = isInList(allowed, country);
  return allowed.length > 0 && !isAllowed;
}

function getCountry(vat, countries) {
  console.info('countries', countries);

  for (var k in countries) {
    if (countries.hasOwnProperty(k)) {
      var regexpValidRes = isVatValidToRegexp(vat, countries[k].rules.regex);
      if (regexpValidRes.isValid) return countries[k];
    }
  }

  return null;
}

function isVatValidToRegexp(vat, regexArr) {
  for (var i = 0; i < regexArr.length; i++) {
    var regex = regexArr[i];
    var isValid = regex.test(vat);
    if (isValid) return {
      isValid: true,
      regex: regex
    };
  }

  return {
    isValid: false
  };
}

function isVatMathValid(vat, country) {
  return country.calcFn(vat);
}

function isVatValid(vat, country) {
  var regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
  if (!regexpValidRes.isValid) return false;
  return isVatMathValid(regexpValidRes.regex.exec(vat)[2], country);
} // eslint-disable-next-line no-unused-vars


var blocked = [];
var allowed = [];
var countries = {
  austria: _countries_austria_js__WEBPACK_IMPORTED_MODULE_0__["austria"],
  belgium: _countries_belgium_js__WEBPACK_IMPORTED_MODULE_1__["belgium"],
  bulgaria: _countries_bulgaria_js__WEBPACK_IMPORTED_MODULE_2__["bulgaria"],
  croatia: _countries_croatia_js__WEBPACK_IMPORTED_MODULE_3__["croatia"],
  cyprus: _countries_cyprus_js__WEBPACK_IMPORTED_MODULE_4__["cyprus"],
  czech_republic: _countries_czech_republic_js__WEBPACK_IMPORTED_MODULE_5__["czech_republic"],
  denmark: _countries_denmark_js__WEBPACK_IMPORTED_MODULE_6__["denmark"],
  estonia: _countries_estonia_js__WEBPACK_IMPORTED_MODULE_7__["estonia"],
  europe: _countries_europe_js__WEBPACK_IMPORTED_MODULE_8__["europe"],
  finland: _countries_finland_js__WEBPACK_IMPORTED_MODULE_9__["finland"],
  france: _countries_france_js__WEBPACK_IMPORTED_MODULE_10__["france"],
  germany: _countries_germany_js__WEBPACK_IMPORTED_MODULE_11__["germany"],
  greece: _countries_greece_js__WEBPACK_IMPORTED_MODULE_12__["greece"],
  hungary: _countries_hungary_js__WEBPACK_IMPORTED_MODULE_13__["hungary"],
  ireland: _countries_ireland_js__WEBPACK_IMPORTED_MODULE_14__["ireland"],
  italy: _countries_italy_js__WEBPACK_IMPORTED_MODULE_15__["italy"],
  latvia: _countries_latvia_js__WEBPACK_IMPORTED_MODULE_16__["latvia"],
  lithuania: _countries_lithuania_js__WEBPACK_IMPORTED_MODULE_17__["lithuania"],
  luxembourg: _countries_luxembourg_js__WEBPACK_IMPORTED_MODULE_18__["luxembourg"],
  malta: _countries_malta_js__WEBPACK_IMPORTED_MODULE_19__["malta"],
  netherlands: _countries_netherlands_js__WEBPACK_IMPORTED_MODULE_20__["netherlands"],
  norway: _countries_norway_js__WEBPACK_IMPORTED_MODULE_21__["norway"],
  poland: _countries_poland_js__WEBPACK_IMPORTED_MODULE_22__["poland"],
  portugal: _countries_portugal_js__WEBPACK_IMPORTED_MODULE_23__["portugal"],
  romania: _countries_romania_js__WEBPACK_IMPORTED_MODULE_24__["romania"],
  russia: _countries_russia_js__WEBPACK_IMPORTED_MODULE_25__["russia"],
  serbia: _countries_serbia_js__WEBPACK_IMPORTED_MODULE_26__["serbia"],
  slovakia_republic: _countries_slovakia_republic_js__WEBPACK_IMPORTED_MODULE_27__["slovakia_republic"],
  slovenia: _countries_slovenia_js__WEBPACK_IMPORTED_MODULE_28__["slovenia"],
  spain: _countries_spain_js__WEBPACK_IMPORTED_MODULE_29__["spain"],
  sweden: _countries_sweden_js__WEBPACK_IMPORTED_MODULE_30__["sweden"],
  switzerland: _countries_switzerland_js__WEBPACK_IMPORTED_MODULE_31__["switzerland"],
  united_kingdom: _countries_united_kingdom_js__WEBPACK_IMPORTED_MODULE_32__["united_kingdom"]
};
function checkVAT(vat) {
  var _blocked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _allowed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var _countries = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (!vat) throw new Error('VAT should be specified');
  var cleanVAT = removeExtraChars(vat);
  var result = new Result(cleanVAT);
  var country = getCountry(cleanVAT, _objectSpread({}, countries, _countries));
  if (!country) return result;
  if (isBlocked(country, [].concat(blocked, _toConsumableArray(_blocked)), [].concat(allowed, _toConsumableArray(_allowed)))) return new Result(cleanVAT, false, country);
  var isValid = isVatValid(cleanVAT, country);
  if (isValid) return new Result(cleanVAT, isValid, country);
  return result;
}

/***/ })

/******/ });
});
//# sourceMappingURL=jsvat.js.map