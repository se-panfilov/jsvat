(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"austria\", function() { return austria; });\n// @flow\n// interface CountryConfig {\n//   name: string;\n//   codes: Array<string>;\n//   calcFn: (vat: string) => boolean;\n// }\n// export const austria: CountryConfig = {\nconst austria = {\n  name: 'Austria',\n  codes: ['AT', 'AUT', '040'],\n  calcFn: function (vat) {\n    var total = 0;\n    var temp;\n\n    for (var i = 0; i < 7; i++) {\n      temp = vat.charAt(i) * this.rules.multipliers[i];\n\n      if (temp > 9) {\n        total += Math.floor(temp / 10) + temp % 10;\n      } else {\n        total += temp;\n      }\n    }\n\n    total = 10 - (total + 4) % 10;\n    if (total === 10) total = 0;\n    return total === +vat.slice(7, 8);\n  },\n  rules: {\n    multipliers: [1, 2, 1, 2, 1, 2, 1],\n    regex: [/^(AT)U(\\d{8})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/austria.js?");

/***/ }),

/***/ "./src/countries/belgium.js":
/*!**********************************!*\
  !*** ./src/countries/belgium.js ***!
  \**********************************/
/*! exports provided: belgium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"belgium\", function() { return belgium; });\n// @flow\nconst belgium = {\n  name: 'Belgium',\n  codes: ['BE', 'BEL', '056'],\n  calcFn: function (vat) {\n    if (vat.length === 9) {\n      vat = '0' + vat;\n    }\n\n    if (+vat.slice(1, 2) === 0) return false;\n    var check = 97 - +vat.slice(0, 8) % 97;\n    return check === +vat.slice(8, 10);\n  },\n  rules: {\n    regex: [/^(BE)(0?\\d{9})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/belgium.js?");

/***/ }),

/***/ "./src/countries/bulgaria.js":
/*!***********************************!*\
  !*** ./src/countries/bulgaria.js ***!
  \***********************************/
/*! exports provided: bulgaria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bulgaria\", function() { return bulgaria; });\n// @flow\nconst bulgaria = {\n  name: 'Bulgaria',\n  codes: ['BG', 'BGR', '100'],\n  calcFn: function (vat) {\n    function _increase(value, vat, from, to, incr) {\n      for (var i = from; i < to; i++) {\n        value += +vat.charAt(i) * (i + incr);\n      }\n\n      return value;\n    }\n\n    function _increase2(value, vat, from, to, multipliers) {\n      for (var i = from; i < to; i++) {\n        value += +vat.charAt(i) * multipliers[i];\n      }\n\n      return value;\n    }\n\n    function _checkNineLengthVat(vat) {\n      var total;\n      var temp = 0;\n      var expect = +vat.slice(8);\n      temp = _increase(temp, vat, 0, 8, 1);\n      total = temp % 11;\n\n      if (total !== 10) {\n        return total === expect;\n      }\n\n      temp = _increase(0, vat, 0, 8, 3);\n      total = temp % 11;\n      if (total === 10) total = 0;\n      return total === expect;\n    }\n\n    function _isPhysicalPerson(vat, rules) {\n      // 10 digit VAT code - see if it relates to a standard physical person\n      if (/^\\d\\d[0-5]\\d[0-3]\\d\\d{4}$/.test(vat)) {\n        // Check month\n        var month = +vat.slice(2, 4);\n\n        if (month > 0 && month < 13 || month > 20 && month < 33 || month > 40 && month < 53) {\n          var total = _increase2(0, vat, 0, 9, rules.multipliers.physical); // Establish check digit.\n\n\n          total = total % 11;\n          if (total === 10) total = 0; // Check to see if the check digit given is correct, If not, try next type of person\n\n          if (total === +vat.substr(9, 1)) return true;\n        }\n      }\n\n      return false;\n    }\n\n    function _isForeigner(vat, rules) {\n      // Extract the next digit and multiply by the counter.\n      var total = _increase2(0, vat, 0, 9, rules.multipliers.foreigner); // Check to see if the check digit given is correct, If not, try next type of person\n\n\n      if (total % 10 === +vat.substr(9, 1)) {\n        return true;\n      }\n    }\n\n    function _miscellaneousVAT(vat, rules) {\n      // Finally, if not yet identified, see if it conforms to a miscellaneous VAT number\n      var total = _increase2(0, vat, 0, 9, rules.multipliers.miscellaneous); // Establish check digit.\n\n\n      total = 11 - total % 11;\n      if (total === 10) return false;\n      if (total === 11) total = 0; // Check to see if the check digit given is correct, If not, we have an error with the VAT number\n\n      var expect = +vat.substr(9, 1);\n      return total === expect;\n    }\n\n    if (vat.length === 9) {\n      return _checkNineLengthVat(vat);\n    } else {\n      return _isPhysicalPerson(vat, this.rules) || _isForeigner(vat, this.rules) || _miscellaneousVAT(vat, this.rules);\n    }\n  },\n  rules: {\n    multipliers: {\n      physical: [2, 4, 8, 5, 10, 9, 7, 3, 6],\n      foreigner: [21, 19, 17, 13, 11, 9, 7, 3, 1],\n      miscellaneous: [4, 3, 2, 7, 6, 5, 4, 3, 2]\n    },\n    regex: [/^(BG)(\\d{9,10})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/bulgaria.js?");

/***/ }),

/***/ "./src/countries/croatia.js":
/*!**********************************!*\
  !*** ./src/countries/croatia.js ***!
  \**********************************/
/*! exports provided: croatia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"croatia\", function() { return croatia; });\n// @flow\nconst croatia = {\n  name: 'Croatia',\n  codes: ['HR', 'HRV', '191'],\n  calcFn: function (vat) {\n    var expect; // Checks the check digits of a Croatian VAT number using ISO 7064, MOD 11-10 for check digit.\n\n    var product = 10;\n    var sum = 0;\n\n    for (var i = 0; i < 10; i++) {\n      // Extract the next digit and implement the algorithm\n      sum = (+vat.charAt(i) + product) % 10;\n\n      if (sum === 0) {\n        sum = 10;\n      }\n\n      product = 2 * sum % 11;\n    } // Now check that we have the right check digit\n\n\n    expect = +vat.slice(10, 11);\n    return (product + expect) % 10 === 1;\n  },\n  rules: {\n    regex: [/^(HR)(\\d{11})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/croatia.js?");

/***/ }),

/***/ "./src/countries/cyprus.js":
/*!*********************************!*\
  !*** ./src/countries/cyprus.js ***!
  \*********************************/
/*! exports provided: cyprus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cyprus\", function() { return cyprus; });\n// @flow\nconst cyprus = {\n  name: 'Cyprus',\n  codes: ['CY', 'CYP', '196'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Not allowed to start with '12'\n\n    if (+vat.slice(0, 2) === 12) return false; // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 8; i++) {\n      var temp = +vat.charAt(i);\n\n      if (i % 2 === 0) {\n        switch (temp) {\n          case 0:\n            temp = 1;\n            break;\n\n          case 1:\n            temp = 0;\n            break;\n\n          case 2:\n            temp = 5;\n            break;\n\n          case 3:\n            temp = 7;\n            break;\n\n          case 4:\n            temp = 9;\n            break;\n\n          default:\n            temp = temp * 2 + 3;\n        }\n      }\n\n      total += temp;\n    } // Establish check digit using modulus 26, and translate to char. equivalent.\n\n\n    total = total % 26;\n    total = String.fromCharCode(total + 65); // Check to see if the check digit given is correct\n\n    expect = vat.substr(8, 1);\n    return total === expect;\n  },\n  rules: {\n    regex: [/^(CY)([0-59]\\d{7}[A-Z])$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/cyprus.js?");

/***/ }),

/***/ "./src/countries/czech_republic.js":
/*!*****************************************!*\
  !*** ./src/countries/czech_republic.js ***!
  \*****************************************/
/*! exports provided: czech_republic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"czech_republic\", function() { return czech_republic; });\n// @flow\nconst czech_republic = {\n  name: 'Czech Republic',\n  codes: ['CZ', 'CZE', '203'],\n  calcFn: function (vat) {\n    function _isLegalEntities(vat, rules) {\n      var total = 0;\n\n      if (rules.additional[0].test(vat)) {\n        // Extract the next digit and multiply by the counter.\n        for (var i = 0; i < 7; i++) {\n          total += +vat.charAt(i) * rules.multipliers[i];\n        } // Establish check digit.\n\n\n        total = 11 - total % 11;\n        if (total === 10) total = 0;\n        if (total === 11) total = 1; // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n        var expect = +vat.slice(7, 8);\n        return total === expect;\n      }\n\n      return false;\n    }\n\n    function _isIndividualType1(vat, rules) {\n      if (rules.additional[1].test(vat)) {\n        var temp = +vat.slice(0, 2);\n\n        if (temp > 62) {\n          return false;\n        } else {\n          return true;\n        }\n      }\n    }\n\n    function _isIndividualType2(vat, rules) {\n      var total = 0;\n\n      if (rules.additional[2].test(vat)) {\n        // Extract the next digit and multiply by the counter.\n        for (var j = 0; j < 7; j++) {\n          total += +vat.charAt(j + 1) * rules.multipliers[j];\n        } // Establish check digit.\n\n\n        total = 11 - total % 11;\n        if (total === 10) total = 0;\n        if (total === 11) total = 1; // Convert calculated check digit according to a lookup table\n\n        var expect = +vat.slice(8, 9);\n        return rules.lookup[total - 1] === expect;\n      }\n\n      return false;\n    }\n\n    function _isIndividualType3(vat, rules) {\n      if (rules.additional[3].test(vat)) {\n        var temp = +vat.slice(0, 2) + vat.slice(2, 4) + vat.slice(4, 6) + vat.slice(6, 8) + vat.slice(8);\n        var expect = +vat % 11 === 0;\n        return !!(temp % 11 === 0 && expect);\n      }\n\n      return false;\n    }\n\n    if (_isLegalEntities(vat, this.rules)) return true;\n    if (_isIndividualType2(vat, this.rules)) return true;\n    if (_isIndividualType3(vat, this.rules)) return true;\n    if (_isIndividualType1(vat, this.rules)) return true;\n    return false;\n  },\n  rules: {\n    multipliers: [8, 7, 6, 5, 4, 3, 2],\n    lookup: [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10],\n    regex: [/^(CZ)(\\d{8,10})(\\d{3})?$/],\n    additional: [/^\\d{8}$/, /^[0-5][0-9][0|1|5|6]\\d[0-3]\\d\\d{3}$/, /^6\\d{8}$/, /^\\d{2}[0-3|5-8]\\d[0-3]\\d\\d{4}$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/czech_republic.js?");

/***/ }),

/***/ "./src/countries/denmark.js":
/*!**********************************!*\
  !*** ./src/countries/denmark.js ***!
  \**********************************/
/*! exports provided: denmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"denmark\", function() { return denmark; });\n// @flow\nconst denmark = {\n  name: 'Denmark',\n  codes: ['DK', 'DNK', '208'],\n  calcFn: function (vat) {\n    var total = 0;\n\n    for (var i = 0; i < 8; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    }\n\n    return total % 11 === 0;\n  },\n  rules: {\n    multipliers: [2, 7, 6, 5, 4, 3, 2, 1],\n    regex: [/^(DK)(\\d{8})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/denmark.js?");

/***/ }),

/***/ "./src/countries/estonia.js":
/*!**********************************!*\
  !*** ./src/countries/estonia.js ***!
  \**********************************/
/*! exports provided: estonia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"estonia\", function() { return estonia; });\n// @flow\nconst estonia = {\n  name: 'Estonia',\n  codes: ['EE', 'EST', '233'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 8; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Establish check digits using modulus 10.\n\n\n    total = 10 - total % 10;\n    if (total === 10) total = 0; // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n    expect = +vat.slice(8, 9);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [3, 7, 1, 3, 7, 1, 3, 7],\n    regex: [/^(EE)(10\\d{7})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/estonia.js?");

/***/ }),

/***/ "./src/countries/europe.js":
/*!*********************************!*\
  !*** ./src/countries/europe.js ***!
  \*********************************/
/*! exports provided: europe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"europe\", function() { return europe; });\n// @flow\nconst europe = {\n  name: 'Europe',\n  codes: ['EU', 'EUR', '000'],\n  // TODO (S.Panfilov) that's not a real codes\n  calcFn: function () {\n    // We know little about EU numbers apart from the fact that the first 3 digits represent the\n    // country, and that there are nine digits in total.\n    return true;\n  },\n  rules: {\n    regex: [/^(EU)(\\d{9})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/europe.js?");

/***/ }),

/***/ "./src/countries/finland.js":
/*!**********************************!*\
  !*** ./src/countries/finland.js ***!
  \**********************************/
/*! exports provided: finland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"finland\", function() { return finland; });\n// @flow\nconst finland = {\n  name: 'Finland',\n  codes: ['FI', 'FIN', '246'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 7; i++) total += +vat.charAt(i) * this.rules.multipliers[i]; // Establish check digit.\n\n\n    total = 11 - total % 11;\n\n    if (total > 9) {\n      total = 0;\n    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n\n    expect = +vat.slice(7, 8);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [7, 9, 10, 5, 8, 4, 2],\n    regex: [/^(FI)(\\d{8})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/finland.js?");

/***/ }),

/***/ "./src/countries/france.js":
/*!*********************************!*\
  !*** ./src/countries/france.js ***!
  \*********************************/
/*! exports provided: france */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"france\", function() { return france; });\n// @flow\nconst france = {\n  name: 'France',\n  codes: ['FR', 'FRA', '250'],\n  calcFn: function (vat) {\n    var total;\n    var expect; // Checks the check digits of a French VAT number.\n\n    if (!/^\\d{11}$/.test(vat)) {\n      return true;\n    } // Extract the last nine digits as an integer.\n\n\n    total = +vat.substring(2); // Establish check digit.\n\n    total = (total * 100 + 12) % 97; // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n    expect = +vat.slice(0, 2);\n    return total === expect;\n  },\n  rules: {\n    regex: [/^(FR)(\\d{11})$/, /^(FR)([A-HJ-NP-Z]\\d{10})$/, /^(FR)(\\d[A-HJ-NP-Z]\\d{9})$/, /^(FR)([A-HJ-NP-Z]{2}\\d{9})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/france.js?");

/***/ }),

/***/ "./src/countries/germany.js":
/*!**********************************!*\
  !*** ./src/countries/germany.js ***!
  \**********************************/
/*! exports provided: germany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"germany\", function() { return germany; });\n// @flow\nconst germany = {\n  name: 'Germany',\n  codes: ['DE', 'DEU', '276'],\n  calcFn: function (vat) {\n    // Checks the check digits of a German VAT number.\n    var product = 10;\n    var sum = 0;\n    var checkDigit = 0;\n    var expect;\n\n    for (var i = 0; i < 8; i++) {\n      // Extract the next digit and implement peculiar algorithm!.\n      sum = (+vat.charAt(i) + product) % 10;\n\n      if (sum === 0) {\n        sum = 10;\n      }\n\n      product = 2 * sum % 11;\n    } // Establish check digit.\n\n\n    if (11 - product === 10) {\n      checkDigit = 0;\n    } else {\n      checkDigit = 11 - product;\n    } // Compare it with the last two characters of the VAT number. If the same, then it is a valid\n    // check digit.\n\n\n    expect = +vat.slice(8, 9);\n    return checkDigit === expect;\n  },\n  rules: {\n    regex: [/^(DE)([1-9]\\d{8})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/germany.js?");

/***/ }),

/***/ "./src/countries/greece.js":
/*!*********************************!*\
  !*** ./src/countries/greece.js ***!
  \*********************************/
/*! exports provided: greece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greece\", function() { return greece; });\n// @flow\nconst greece = {\n  name: 'Greece',\n  codes: ['GR', 'GRC', '300'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // eight character numbers should be prefixed with an 0.\n\n    if (vat.length === 8) {\n      vat = '0' + vat;\n    } // Extract the next digit and multiply by the counter.\n\n\n    for (var i = 0; i < 8; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Establish check digit.\n\n\n    total = total % 11;\n\n    if (total > 9) {\n      total = 0;\n    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n\n    expect = +vat.slice(8, 9);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [256, 128, 64, 32, 16, 8, 4, 2],\n    regex: [/^(EL)(\\d{9})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/greece.js?");

/***/ }),

/***/ "./src/countries/hungary.js":
/*!**********************************!*\
  !*** ./src/countries/hungary.js ***!
  \**********************************/
/*! exports provided: hungary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hungary\", function() { return hungary; });\n// @flow\nconst hungary = {\n  name: 'Hungary',\n  codes: ['HU', 'HUN', '348'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 7; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Establish check digit.\n\n\n    total = 10 - total % 10;\n    if (total === 10) total = 0; // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n    expect = +vat.slice(7, 8);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [9, 7, 3, 1, 9, 7, 3],\n    regex: [/^(HU)(\\d{8})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/hungary.js?");

/***/ }),

/***/ "./src/countries/ireland.js":
/*!**********************************!*\
  !*** ./src/countries/ireland.js ***!
  \**********************************/
/*! exports provided: ireland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ireland\", function() { return ireland; });\n// @flow\nconst ireland = {\n  name: 'Ireland',\n  codes: ['IE', 'IRL', '372'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // If the code is type 1 format, we need to convert it to the new before performing the validation.\n\n    if (this.rules.typeFormats.first.test(vat)) {\n      vat = '0' + vat.substring(2, 7) + vat.substring(0, 1) + vat.substring(7, 8);\n    } // Extract the next digit and multiply by the counter.\n\n\n    for (var i = 0; i < 7; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // If the number is type 3 then we need to include the trailing A or H in the calculation\n\n\n    if (this.rules.typeFormats.third.test(vat)) {\n      // Add in a multiplier for the character A (1*9=9) or H (8*9=72)\n      if (vat.charAt(8) === 'H') {\n        total += 72;\n      } else {\n        total += 9;\n      }\n    } // Establish check digit using modulus 23, and translate to char. equivalent.\n\n\n    total = total % 23;\n\n    if (total === 0) {\n      total = 'W';\n    } else {\n      total = String.fromCharCode(total + 64);\n    } // Compare it with the eighth character of the VAT number. If it's the same, then it's valid.\n\n\n    expect = vat.slice(7, 8);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [8, 7, 6, 5, 4, 3, 2],\n    typeFormats: {\n      first: /^\\d[A-Z*+]/,\n      third: /^\\d{7}[A-Z][AH]$/\n    },\n    regex: [/^(IE)(\\d{7}[A-W])$/, /^(IE)([7-9][A-Z*+)]\\d{5}[A-W])$/, /^(IE)(\\d{7}[A-W][AH])$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/ireland.js?");

/***/ }),

/***/ "./src/countries/italy.js":
/*!********************************!*\
  !*** ./src/countries/italy.js ***!
  \********************************/
/*! exports provided: italy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"italy\", function() { return italy; });\n// @flow\nconst italy = {\n  name: 'Italy',\n  codes: ['IT', 'ITA', '380'],\n  calcFn: function (vat) {\n    var total = 0;\n    var temp;\n    var expect; // The last three digits are the issuing office, and cannot exceed more 201, unless 999 or 888\n\n    if (+vat.slice(0, 7) === 0) {\n      return false;\n    }\n\n    temp = +vat.slice(7, 10);\n\n    if (temp < 1 || temp > 201 && temp !== 999 && temp !== 888) {\n      return false;\n    } // Extract the next digit and multiply by the appropriate\n\n\n    for (var i = 0; i < 10; i++) {\n      temp = +vat.charAt(i) * this.rules.multipliers[i];\n      if (temp > 9) total += Math.floor(temp / 10) + temp % 10;else total += temp;\n    } // Establish check digit.\n\n\n    total = 10 - total % 10;\n\n    if (total > 9) {\n      total = 0;\n    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n\n    expect = +vat.slice(10, 11);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],\n    regex: [/^(IT)(\\d{11})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/italy.js?");

/***/ }),

/***/ "./src/countries/latvia.js":
/*!*********************************!*\
  !*** ./src/countries/latvia.js ***!
  \*********************************/
/*! exports provided: latvia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"latvia\", function() { return latvia; });\n// @flow\nconst latvia = {\n  name: 'Latvia',\n  codes: ['LV', 'LVA', '428'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Differentiate between legal entities and natural bodies. For the latter we simply check that\n    // the first six digits correspond to valid DDMMYY dates.\n\n    if (/^[0-3]/.test(vat)) {\n      return !!/^[0-3][0-9][0-1][0-9]/.test(vat);\n    } else {\n      // Extract the next digit and multiply by the counter.\n      for (var i = 0; i < 10; i++) {\n        total += +vat.charAt(i) * this.rules.multipliers[i];\n      } // Establish check digits by getting modulus 11.\n\n\n      if (total % 11 === 4 && vat[0] === 9) total = total - 45;\n\n      if (total % 11 === 4) {\n        total = 4 - total % 11;\n      } else if (total % 11 > 4) {\n        total = 14 - total % 11;\n      } else if (total % 11 < 4) {\n        total = 3 - total % 11;\n      } // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n\n      expect = +vat.slice(10, 11);\n      return total === expect;\n    }\n  },\n  rules: {\n    multipliers: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6],\n    regex: [/^(LV)(\\d{11})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/latvia.js?");

/***/ }),

/***/ "./src/countries/lithuania.js":
/*!************************************!*\
  !*** ./src/countries/lithuania.js ***!
  \************************************/
/*! exports provided: lithuania */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lithuania\", function() { return lithuania; });\n// @flow\nconst lithuania = {\n  name: 'Lithuania',\n  codes: ['LT', 'LTU', '440'],\n  calcFn: function (vat) {\n    function _extractDigit(vat, multiplier, key) {\n      return +vat.charAt(key) * multiplier[key];\n    }\n\n    function _doubleCheckCalculation(vat, total, rules) {\n      if (total % 11 === 10) {\n        total = 0;\n\n        for (var i = 0; i < 8; i++) {\n          total += _extractDigit(vat, rules.multipliers.short, i);\n        }\n      }\n\n      return total;\n    }\n\n    function extractDigit(vat, total) {\n      for (var i = 0; i < 8; i++) {\n        total += +vat.charAt(i) * (i + 1);\n      }\n\n      return total;\n    }\n\n    function checkDigit(total) {\n      total = total % 11;\n\n      if (total === 10) {\n        total = 0;\n      }\n\n      return total;\n    }\n\n    function _check9DigitVat(vat, rules) {\n      // 9 character VAT numbers are for legal persons\n      var total = 0;\n\n      if (vat.length === 9) {\n        // 8th character must be one\n        if (!/^\\d{7}1/.test(vat)) return false; // Extract the next digit and multiply by the counter+1.\n\n        total = extractDigit(vat, total); // Can have a double check digit calculation!\n\n        total = _doubleCheckCalculation(vat, total, rules); // Establish check digit.\n\n        total = checkDigit(total); // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n        var expect = +vat.slice(8, 9);\n        return total === expect;\n      }\n\n      return false;\n    }\n\n    function extractDigit12(vat, total, rules) {\n      for (var k = 0; k < 11; k++) {\n        total += _extractDigit(vat, rules.multipliers.med, k);\n      }\n\n      return total;\n    }\n\n    function _doubleCheckCalculation12(vat, total, rules) {\n      if (total % 11 === 10) {\n        total = 0;\n\n        for (var l = 0; l < 11; l++) {\n          total += _extractDigit(vat, rules.multipliers.alt, l);\n        }\n      }\n\n      return total;\n    }\n\n    function _check12DigitVat(vat, rules) {\n      var total = 0; // 12 character VAT numbers are for temporarily registered taxpayers\n\n      if (vat.length === 12) {\n        // 11th character must be one\n        if (!rules.check.test(vat)) return false; // Extract the next digit and multiply by the counter+1.\n\n        total = extractDigit12(vat, total, rules); // Can have a double check digit calculation!\n\n        total = _doubleCheckCalculation12(vat, total, rules); // Establish check digit.\n\n        total = checkDigit(total); // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n        var expect = +vat.slice(11, 12);\n        return total === expect;\n      }\n\n      return false;\n    }\n\n    return _check9DigitVat(vat, this.rules) || _check12DigitVat(vat, this.rules);\n  },\n  rules: {\n    multipliers: {\n      short: [3, 4, 5, 6, 7, 8, 9, 1],\n      med: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2],\n      alt: [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]\n    },\n    check: /^\\d{10}1/,\n    regex: [/^(LT)(\\d{9}|\\d{12})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/lithuania.js?");

/***/ }),

/***/ "./src/countries/luxembourg.js":
/*!*************************************!*\
  !*** ./src/countries/luxembourg.js ***!
  \*************************************/
/*! exports provided: luxembourg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"luxembourg\", function() { return luxembourg; });\n// @flow\nconst luxembourg = {\n  name: 'Luxembourg',\n  codes: ['LU', 'LUX', '442'],\n  calcFn: function (vat) {\n    var expect = +vat.slice(6, 8);\n    var checkDigit = +vat.slice(0, 6) % 89; // Checks the check digits of a Luxembourg VAT number.\n\n    return checkDigit === expect;\n  },\n  rules: {\n    regex: [/^(LU)(\\d{8})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/luxembourg.js?");

/***/ }),

/***/ "./src/countries/malta.js":
/*!********************************!*\
  !*** ./src/countries/malta.js ***!
  \********************************/
/*! exports provided: malta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"malta\", function() { return malta; });\n// @flow\nconst malta = {\n  name: 'Malta',\n  codes: ['MT', 'MLT', '470'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 6; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Establish check digits by getting modulus 37.\n\n\n    total = 37 - total % 37; // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n    expect = +vat.slice(6, 8);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [3, 4, 6, 7, 8, 9],\n    regex: [/^(MT)([1-9]\\d{7})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/malta.js?");

/***/ }),

/***/ "./src/countries/netherlands.js":
/*!**************************************!*\
  !*** ./src/countries/netherlands.js ***!
  \**************************************/
/*! exports provided: netherlands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"netherlands\", function() { return netherlands; });\n// @flow\nconst netherlands = {\n  name: 'Netherlands',\n  codes: ['NL', 'NLD', '528'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 8; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Establish check digits by getting modulus 11.\n\n\n    total = total % 11;\n\n    if (total > 9) {\n      total = 0;\n    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n\n    expect = +vat.slice(8, 9);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [9, 8, 7, 6, 5, 4, 3, 2],\n    regex: [/^(NL)(\\d{9})B\\d{2}$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/netherlands.js?");

/***/ }),

/***/ "./src/countries/norway.js":
/*!*********************************!*\
  !*** ./src/countries/norway.js ***!
  \*********************************/
/*! exports provided: norway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"norway\", function() { return norway; });\n// @flow\nconst norway = {\n  name: 'Norway',\n  codes: ['NO', 'NOR', '578'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // See http://www.brreg.no/english/coordination/number.html\n    // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 8; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Establish check digits by getting modulus 11. Check digits > 9 are invalid\n\n\n    total = 11 - total % 11;\n\n    if (total === 11) {\n      total = 0;\n    }\n\n    if (total < 10) {\n      // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n      expect = +vat.slice(8, 9);\n      return total === expect;\n    }\n  },\n  rules: {\n    multipliers: [3, 2, 7, 6, 5, 4, 3, 2],\n    regex: [/^(NO)(\\d{9})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/norway.js?");

/***/ }),

/***/ "./src/countries/poland.js":
/*!*********************************!*\
  !*** ./src/countries/poland.js ***!
  \*********************************/
/*! exports provided: poland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"poland\", function() { return poland; });\n// @flow\nconst poland = {\n  name: 'Poland',\n  codes: ['PL', 'POL', '616'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 9; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Establish check digits subtracting modulus 11 from 11.\n\n\n    total = total % 11;\n\n    if (total > 9) {\n      total = 0;\n    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n\n    expect = +vat.slice(9, 10);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [6, 5, 7, 2, 3, 4, 5, 6, 7],\n    regex: [/^(PL)(\\d{10})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/poland.js?");

/***/ }),

/***/ "./src/countries/portugal.js":
/*!***********************************!*\
  !*** ./src/countries/portugal.js ***!
  \***********************************/
/*! exports provided: portugal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"portugal\", function() { return portugal; });\n// @flow\nconst portugal = {\n  name: 'Portugal',\n  codes: ['PT', 'PRT', '620'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 8; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Establish check digits subtracting modulus 11 from 11.\n\n\n    total = 11 - total % 11;\n\n    if (total > 9) {\n      total = 0;\n    } // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n\n    expect = +vat.slice(8, 9);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [9, 8, 7, 6, 5, 4, 3, 2],\n    regex: [/^(PT)(\\d{9})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/portugal.js?");

/***/ }),

/***/ "./src/countries/romania.js":
/*!**********************************!*\
  !*** ./src/countries/romania.js ***!
  \**********************************/
/*! exports provided: romania */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"romania\", function() { return romania; });\n// @flow\nconst romania = {\n  name: 'Romania',\n  codes: ['RO', 'ROU', '642'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Extract the next digit and multiply by the counter.\n\n    var vatLength = vat.length;\n    var multipliers = this.rules.multipliers.slice(10 - vatLength);\n\n    for (var i = 0; i < vat.length - 1; i++) {\n      total += +vat.charAt(i) * multipliers[i];\n    } // Establish check digits by getting modulus 11.\n\n\n    total = 10 * total % 11;\n    if (total === 10) total = 0; // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n    expect = +vat.slice(vat.length - 1, vat.length);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [7, 5, 3, 2, 1, 7, 5, 3, 2],\n    regex: [/^(RO)([1-9]\\d{1,9})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/romania.js?");

/***/ }),

/***/ "./src/countries/russia.js":
/*!*********************************!*\
  !*** ./src/countries/russia.js ***!
  \*********************************/
/*! exports provided: russia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"russia\", function() { return russia; });\n// @flow\nconst russia = {\n  name: 'Russian Federation',\n  codes: ['RU', 'RUS', '643'],\n  calcFn: function (vat) {\n    function _check10DigitINN(vat, rules) {\n      var total = 0;\n\n      if (vat.length === 10) {\n        for (var i = 0; i < 10; i++) {\n          total += +vat.charAt(i) * rules.multipliers.m_1[i];\n        }\n\n        total = total % 11;\n\n        if (total > 9) {\n          total = total % 10;\n        } // Compare it with the last character of the VAT number. If it is the same, then it's valid\n\n\n        var expect = +vat.slice(9, 10);\n        return total === expect;\n      }\n\n      return false;\n    }\n\n    function _check12DigitINN(vat, rules) {\n      var total1 = 0;\n      var total2 = 0;\n\n      if (vat.length === 12) {\n        for (var j = 0; j < 11; j++) {\n          total1 += +vat.charAt(j) * rules.multipliers.m_2[j];\n        }\n\n        total1 = total1 % 11;\n\n        if (total1 > 9) {\n          total1 = total1 % 10;\n        }\n\n        for (var k = 0; k < 11; k++) {\n          total2 += +vat.charAt(k) * rules.multipliers.m_3[k];\n        }\n\n        total2 = total2 % 11;\n\n        if (total2 > 9) {\n          total2 = total2 % 10;\n        } // Compare the first check with the 11th character and the second check with the 12th and last\n        // character of the VAT number. If they're both the same, then it's valid\n\n\n        var expect = total1 === +vat.slice(10, 11);\n        var expect2 = total2 === +vat.slice(11, 12);\n        return expect && expect2;\n      }\n\n      return false;\n    } // See http://russianpartner.biz/test_inn.html for algorithm\n\n\n    return _check10DigitINN(vat, this.rules) || _check12DigitINN(vat, this.rules);\n  },\n  rules: {\n    multipliers: {\n      m_1: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],\n      m_2: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],\n      m_3: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]\n    },\n    regex: [/^(RU)(\\d{10}|\\d{12})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/russia.js?");

/***/ }),

/***/ "./src/countries/serbia.js":
/*!*********************************!*\
  !*** ./src/countries/serbia.js ***!
  \*********************************/
/*! exports provided: serbia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serbia\", function() { return serbia; });\n// @flow\nconst serbia = {\n  name: 'Serbia',\n  codes: ['RS', 'SRB', '688'],\n  calcFn: function (vat) {\n    // Checks the check digits of a Serbian VAT number using ISO 7064, MOD 11-10 for check digit.\n    var product = 10;\n    var sum = 0;\n    var checkDigit;\n\n    for (var i = 0; i < 8; i++) {\n      // Extract the next digit and implement the algorithm\n      sum = (+vat.charAt(i) + product) % 10;\n\n      if (sum === 0) {\n        sum = 10;\n      }\n\n      product = 2 * sum % 11;\n    } // Now check that we have the right check digit\n\n\n    var expect = 1;\n    checkDigit = (product + +vat.slice(8, 9)) % 10;\n    return checkDigit === expect;\n  },\n  rules: {\n    regex: [/^(RS)(\\d{9})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/serbia.js?");

/***/ }),

/***/ "./src/countries/slovakia_republic.js":
/*!********************************************!*\
  !*** ./src/countries/slovakia_republic.js ***!
  \********************************************/
/*! exports provided: slovakia_republic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slovakia_republic\", function() { return slovakia_republic; });\n// @flow\nconst slovakia_republic = {\n  name: 'Slovakia_',\n  codes: ['SK', 'SVK', '703'],\n  calcFn: function (vat) {\n    var expect = 0;\n    var checkDigit = vat % 11;\n    return checkDigit === expect;\n  },\n  rules: {\n    regex: [/^(SK)([1-9]\\d[2346-9]\\d{7})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/slovakia_republic.js?");

/***/ }),

/***/ "./src/countries/slovenia.js":
/*!***********************************!*\
  !*** ./src/countries/slovenia.js ***!
  \***********************************/
/*! exports provided: slovenia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slovenia\", function() { return slovenia; });\n// @flow\nconst slovenia = {\n  name: 'Slovenia',\n  codes: ['SI', 'SVN', '705'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 7; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Establish check digits using modulus 11\n\n\n    total = 11 - total % 11;\n\n    if (total === 10) {\n      total = 0;\n    } // Compare the number with the last character of the VAT number. If it is the\n    // same, then it's a valid check digit.\n\n\n    expect = +vat.slice(7, 8);\n    return !!(total !== 11 && total === expect);\n  },\n  rules: {\n    multipliers: [8, 7, 6, 5, 4, 3, 2],\n    regex: [/^(SI)([1-9]\\d{7})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/slovenia.js?");

/***/ }),

/***/ "./src/countries/spain.js":
/*!********************************!*\
  !*** ./src/countries/spain.js ***!
  \********************************/
/*! exports provided: spain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spain\", function() { return spain; });\n// @flow\nconst spain = {\n  name: 'Spain',\n  codes: ['ES', 'ESP', '724'],\n  calcFn: function (vat) {\n    var i = 0;\n    var total = 0;\n    var temp;\n    var expect; // National juridical entities\n\n    if (this.rules.additional[0].test(vat)) {\n      // Extract the next digit and multiply by the counter.\n      for (i = 0; i < 7; i++) {\n        temp = vat.charAt(i + 1) * this.rules.multipliers[i];\n        if (temp > 9) total += Math.floor(temp / 10) + temp % 10;else total += temp;\n      } // Now calculate the check digit itself.\n\n\n      total = 10 - total % 10;\n\n      if (total === 10) {\n        total = 0;\n      } // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n\n      expect = +vat.slice(8, 9);\n      return total === expect;\n    } else if (this.rules.additional[1].test(vat)) {\n      // Juridical entities other than national ones\n      // Extract the next digit and multiply by the counter.\n      for (i = 0; i < 7; i++) {\n        temp = vat.charAt(i + 1) * this.rules.multipliers[i];\n        if (temp > 9) total += Math.floor(temp / 10) + temp % 10;else total += temp;\n      } // Now calculate the check digit itself.\n\n\n      total = 10 - total % 10;\n      total = String.fromCharCode(total + 64); // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n      expect = vat.slice(8, 9);\n      return total === expect;\n    } else if (this.rules.additional[2].test(vat)) {\n      // Personal number (NIF) (starting with numeric of Y or Z)\n      var tempnumber = vat;\n      if (tempnumber.substring(0, 1) === 'Y') tempnumber = tempnumber.replace(/Y/, '1');\n      if (tempnumber.substring(0, 1) === 'Z') tempnumber = tempnumber.replace(/Z/, '2');\n      expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempnumber.substring(0, 8) % 23);\n      return tempnumber.charAt(8) === expect;\n    } else if (this.rules.additional[3].test(vat)) {\n      // Personal number (NIF) (starting with K, L, M, or X)\n      expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+vat.substring(1, 8) % 23);\n      return vat.charAt(8) === expect;\n    } else return false;\n  },\n  rules: {\n    multipliers: [2, 1, 2, 1, 2, 1, 2],\n    regex: [/^(ES)([A-Z]\\d{8})$/, /^(ES)([A-HN-SW]\\d{7}[A-J])$/, /^(ES)([0-9YZ]\\d{7}[A-Z])$/, /^(ES)([KLMX]\\d{7}[A-Z])$/],\n    additional: [/^[A-H|J|U|V]\\d{8}$/, /^[A-H|N-S|W]\\d{7}[A-J]$/, /^[0-9|Y|Z]\\d{7}[A-Z]$/, /^[K|L|M|X]\\d{7}[A-Z]$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/spain.js?");

/***/ }),

/***/ "./src/countries/sweden.js":
/*!*********************************!*\
  !*** ./src/countries/sweden.js ***!
  \*********************************/
/*! exports provided: sweden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sweden\", function() { return sweden; });\n// @flow\nconst sweden = {\n  name: 'Sweden',\n  codes: ['SE', 'SWE', '752'],\n  calcFn: function (vat) {\n    var expect; // Calculate R where R = R1 + R3 + R5 + R7 + R9, and Ri = INT(Ci/5) + (Ci*2) modulo 10\n\n    var R = 0;\n    var digit;\n\n    for (var i = 0; i < 9; i = i + 2) {\n      digit = +vat.charAt(i);\n      R += Math.floor(digit / 5) + digit * 2 % 10;\n    } // Calculate S where S = C2 + C4 + C6 + C8\n\n\n    var S = 0;\n\n    for (var j = 1; j < 9; j = j + 2) {\n      S += +vat.charAt(j);\n    }\n\n    var checkDigit = (10 - (R + S) % 10) % 10; // Compare it with the last character of the VAT number. If it's the same, then it's valid.\n\n    expect = +vat.slice(9, 10);\n    return checkDigit === expect;\n  },\n  rules: {\n    regex: [/^(SE)(\\d{10}01)$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/sweden.js?");

/***/ }),

/***/ "./src/countries/switzerland.js":
/*!**************************************!*\
  !*** ./src/countries/switzerland.js ***!
  \**************************************/
/*! exports provided: switzerland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switzerland\", function() { return switzerland; });\n// @flow\nconst switzerland = {\n  name: 'Switzerland',\n  codes: ['CH', 'CHE', '756'],\n  calcFn: function (vat) {\n    var total = 0;\n\n    for (var i = 0; i < 8; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Establish check digit.\n\n\n    total = 11 - total % 11;\n    if (total === 10) return false;\n    if (total === 11) total = 0; // Check to see if the check digit given is correct, If not, we have an error with the VAT number\n\n    var expect = +vat.substr(8, 1);\n    return total === expect;\n  },\n  rules: {\n    multipliers: [5, 4, 3, 2, 7, 6, 5, 4],\n    regex: [/^(CHE)(\\d{9})(MWST)?$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/switzerland.js?");

/***/ }),

/***/ "./src/countries/united_kingdom.js":
/*!*****************************************!*\
  !*** ./src/countries/united_kingdom.js ***!
  \*****************************************/
/*! exports provided: united_kingdom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"united_kingdom\", function() { return united_kingdom; });\n// @flow\nconst united_kingdom = {\n  name: 'United Kingdom',\n  codes: ['GB', 'GBR', '826'],\n  calcFn: function (vat) {\n    var total = 0;\n    var expect; // Government departments\n\n    if (vat.substr(0, 2) === 'GD') {\n      expect = 500;\n      return vat.substr(2, 3) < expect;\n    } // Health authorities\n\n\n    if (vat.substr(0, 2) === 'HA') {\n      expect = 499;\n      return vat.substr(2, 3) > expect;\n    } // Standard and commercial numbers\n    // 0 VAT numbers disallowed!\n\n\n    if (+vat.slice(0) === 0) return false; // Check range is OK for modulus 97 calculation\n\n    var no = +vat.slice(0, 7); // Extract the next digit and multiply by the counter.\n\n    for (var i = 0; i < 7; i++) {\n      total += +vat.charAt(i) * this.rules.multipliers[i];\n    } // Old numbers use a simple 97 modulus, but new numbers use an adaptation of that (less 55). Our\n    // VAT number could use either system, so we check it against both.\n    // Establish check digits by subtracting 97 from total until negative.\n\n\n    var checkDigit = total;\n\n    while (checkDigit > 0) {\n      checkDigit = checkDigit - 97;\n    } // Get the absolute value and compare it with the last two characters of the VAT number. If the\n    // same, then it is a valid traditional check digit. However, even then the number must fit within\n    // certain specified ranges.\n\n\n    checkDigit = Math.abs(checkDigit);\n    if (checkDigit === +vat.slice(7, 9) && no < 9990001 && (no < 100000 || no > 999999) && (no < 9490001 || no > 9700000)) return true; // Now try the new method by subtracting 55 from the check digit if we can - else add 42\n\n    if (checkDigit >= 55) checkDigit = checkDigit - 55;else checkDigit = checkDigit + 42;\n    expect = +vat.slice(7, 9);\n    return !!(checkDigit === expect && no > 1000000);\n  },\n  rules: {\n    multipliers: [8, 7, 6, 5, 4, 3, 2],\n    regex: [/^(GB)?(\\d{9})$/, /^(GB)?(\\d{12})$/, /^(GB)?(GD\\d{3})$/, /^(GB)?(HA\\d{3})$/]\n  }\n};\n\n//# sourceURL=webpack:///./src/countries/united_kingdom.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: jsvat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jsvat\", function() { return jsvat; });\n/* harmony import */ var _countries_austria_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries/austria.js */ \"./src/countries/austria.js\");\n/* harmony import */ var _countries_belgium_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries/belgium.js */ \"./src/countries/belgium.js\");\n/* harmony import */ var _countries_bulgaria_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries/bulgaria.js */ \"./src/countries/bulgaria.js\");\n/* harmony import */ var _countries_croatia_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries/croatia.js */ \"./src/countries/croatia.js\");\n/* harmony import */ var _countries_cyprus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countries/cyprus.js */ \"./src/countries/cyprus.js\");\n/* harmony import */ var _countries_czech_republic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countries/czech_republic.js */ \"./src/countries/czech_republic.js\");\n/* harmony import */ var _countries_denmark_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./countries/denmark.js */ \"./src/countries/denmark.js\");\n/* harmony import */ var _countries_estonia_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./countries/estonia.js */ \"./src/countries/estonia.js\");\n/* harmony import */ var _countries_europe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./countries/europe.js */ \"./src/countries/europe.js\");\n/* harmony import */ var _countries_finland_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./countries/finland.js */ \"./src/countries/finland.js\");\n/* harmony import */ var _countries_france_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./countries/france.js */ \"./src/countries/france.js\");\n/* harmony import */ var _countries_germany_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./countries/germany.js */ \"./src/countries/germany.js\");\n/* harmony import */ var _countries_greece_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./countries/greece.js */ \"./src/countries/greece.js\");\n/* harmony import */ var _countries_hungary_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./countries/hungary.js */ \"./src/countries/hungary.js\");\n/* harmony import */ var _countries_ireland_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./countries/ireland.js */ \"./src/countries/ireland.js\");\n/* harmony import */ var _countries_italy_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./countries/italy.js */ \"./src/countries/italy.js\");\n/* harmony import */ var _countries_latvia_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./countries/latvia.js */ \"./src/countries/latvia.js\");\n/* harmony import */ var _countries_lithuania_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./countries/lithuania.js */ \"./src/countries/lithuania.js\");\n/* harmony import */ var _countries_luxembourg_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./countries/luxembourg.js */ \"./src/countries/luxembourg.js\");\n/* harmony import */ var _countries_malta_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./countries/malta.js */ \"./src/countries/malta.js\");\n/* harmony import */ var _countries_netherlands_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./countries/netherlands.js */ \"./src/countries/netherlands.js\");\n/* harmony import */ var _countries_norway_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./countries/norway.js */ \"./src/countries/norway.js\");\n/* harmony import */ var _countries_poland_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./countries/poland.js */ \"./src/countries/poland.js\");\n/* harmony import */ var _countries_portugal_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./countries/portugal.js */ \"./src/countries/portugal.js\");\n/* harmony import */ var _countries_romania_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./countries/romania.js */ \"./src/countries/romania.js\");\n/* harmony import */ var _countries_russia_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./countries/russia.js */ \"./src/countries/russia.js\");\n/* harmony import */ var _countries_serbia_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./countries/serbia.js */ \"./src/countries/serbia.js\");\n/* harmony import */ var _countries_slovakia_republic_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./countries/slovakia_republic.js */ \"./src/countries/slovakia_republic.js\");\n/* harmony import */ var _countries_slovenia_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./countries/slovenia.js */ \"./src/countries/slovenia.js\");\n/* harmony import */ var _countries_spain_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./countries/spain.js */ \"./src/countries/spain.js\");\n/* harmony import */ var _countries_sweden_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./countries/sweden.js */ \"./src/countries/sweden.js\");\n/* harmony import */ var _countries_switzerland_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./countries/switzerland.js */ \"./src/countries/switzerland.js\");\n/* harmony import */ var _countries_united_kingdom_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./countries/united_kingdom.js */ \"./src/countries/united_kingdom.js\");\n// @flow\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Result(vat, isValid, country) {\n  this.value = vat || null;\n  this.isValid = !!isValid;\n\n  if (country) {\n    this.country = {\n      name: country.name,\n      isoCode: {\n        short: country.codes[0],\n        long: country.codes[1],\n        numeric: country.codes[2]\n      }\n    };\n  }\n}\n\nfunction removeExtraChars(vat) {\n  vat = vat || '';\n  return vat.toString().toUpperCase().replace(/(\\s|-|\\.)+/g, '');\n}\n\nfunction isValEqToCode(val, codes) {\n  return val === codes[0] || val === codes[1] || val === codes[2];\n}\n\nfunction isInList(list, country) {\n  if (!list) return false;\n\n  for (var i = 0; i < list.length; i++) {\n    var val = list[i].toUpperCase();\n    if (val === country.name.toUpperCase()) return true;\n    if (isValEqToCode(val, country.codes)) return true;\n  }\n\n  return false;\n}\n\nfunction isBlocked(country, blocked, allowed) {\n  var isBlocked = isInList(blocked, country);\n  if (isBlocked) return true;\n  var isAllowed = isInList(allowed, country);\n  return allowed.length > 0 && !isAllowed;\n}\n\nfunction getCountry(vat, countries) {\n  for (var k in countries) {\n    if (countries.hasOwnProperty(k)) {\n      var regexpValidRes = isVatValidToRegexp(vat, countries[k].rules.regex);\n      if (regexpValidRes.isValid) return countries[k];\n    }\n  }\n\n  return null;\n}\n\nfunction isVatValidToRegexp(vat, regexArr) {\n  for (var i = 0; i < regexArr.length; i++) {\n    var regex = regexArr[i];\n    var isValid = regex.test(vat);\n    if (isValid) return {\n      isValid: true,\n      regex: regex\n    };\n  }\n\n  return {\n    isValid: false\n  };\n}\n\nfunction isVatMathValid(vat, country) {\n  return country.calcFn(vat);\n}\n\nfunction isVatValid(vat, country) {\n  var regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);\n  if (!regexpValidRes.isValid) return false;\n  return isVatMathValid(regexpValidRes.regex.exec(vat)[2], country);\n} // eslint-disable-next-line no-unused-vars\n\n\nconst jsvat = {\n  blocked: [],\n  allowed: [],\n  countries: {\n    austria: _countries_austria_js__WEBPACK_IMPORTED_MODULE_0__[\"austria\"],\n    belgium: _countries_belgium_js__WEBPACK_IMPORTED_MODULE_1__[\"belgium\"],\n    bulgaria: _countries_bulgaria_js__WEBPACK_IMPORTED_MODULE_2__[\"bulgaria\"],\n    croatia: _countries_croatia_js__WEBPACK_IMPORTED_MODULE_3__[\"croatia\"],\n    cyprus: _countries_cyprus_js__WEBPACK_IMPORTED_MODULE_4__[\"cyprus\"],\n    czech_republic: _countries_czech_republic_js__WEBPACK_IMPORTED_MODULE_5__[\"czech_republic\"],\n    denmark: _countries_denmark_js__WEBPACK_IMPORTED_MODULE_6__[\"denmark\"],\n    estonia: _countries_estonia_js__WEBPACK_IMPORTED_MODULE_7__[\"estonia\"],\n    europe: _countries_europe_js__WEBPACK_IMPORTED_MODULE_8__[\"europe\"],\n    finland: _countries_finland_js__WEBPACK_IMPORTED_MODULE_9__[\"finland\"],\n    france: _countries_france_js__WEBPACK_IMPORTED_MODULE_10__[\"france\"],\n    germany: _countries_germany_js__WEBPACK_IMPORTED_MODULE_11__[\"germany\"],\n    greece: _countries_greece_js__WEBPACK_IMPORTED_MODULE_12__[\"greece\"],\n    hungary: _countries_hungary_js__WEBPACK_IMPORTED_MODULE_13__[\"hungary\"],\n    ireland: _countries_ireland_js__WEBPACK_IMPORTED_MODULE_14__[\"ireland\"],\n    italy: _countries_italy_js__WEBPACK_IMPORTED_MODULE_15__[\"italy\"],\n    latvia: _countries_latvia_js__WEBPACK_IMPORTED_MODULE_16__[\"latvia\"],\n    lithuania: _countries_lithuania_js__WEBPACK_IMPORTED_MODULE_17__[\"lithuania\"],\n    luxembourg: _countries_luxembourg_js__WEBPACK_IMPORTED_MODULE_18__[\"luxembourg\"],\n    malta: _countries_malta_js__WEBPACK_IMPORTED_MODULE_19__[\"malta\"],\n    netherlands: _countries_netherlands_js__WEBPACK_IMPORTED_MODULE_20__[\"netherlands\"],\n    norway: _countries_norway_js__WEBPACK_IMPORTED_MODULE_21__[\"norway\"],\n    poland: _countries_poland_js__WEBPACK_IMPORTED_MODULE_22__[\"poland\"],\n    portugal: _countries_portugal_js__WEBPACK_IMPORTED_MODULE_23__[\"portugal\"],\n    romania: _countries_romania_js__WEBPACK_IMPORTED_MODULE_24__[\"romania\"],\n    russia: _countries_russia_js__WEBPACK_IMPORTED_MODULE_25__[\"russia\"],\n    serbia: _countries_serbia_js__WEBPACK_IMPORTED_MODULE_26__[\"serbia\"],\n    slovakia_republic: _countries_slovakia_republic_js__WEBPACK_IMPORTED_MODULE_27__[\"slovakia_republic\"],\n    slovenia: _countries_slovenia_js__WEBPACK_IMPORTED_MODULE_28__[\"slovenia\"],\n    spain: _countries_spain_js__WEBPACK_IMPORTED_MODULE_29__[\"spain\"],\n    sweden: _countries_sweden_js__WEBPACK_IMPORTED_MODULE_30__[\"sweden\"],\n    switzerland: _countries_switzerland_js__WEBPACK_IMPORTED_MODULE_31__[\"switzerland\"],\n    united_kingdom: _countries_united_kingdom_js__WEBPACK_IMPORTED_MODULE_32__[\"united_kingdom\"]\n  },\n  checkVAT: function (vat) {\n    if (!vat) throw new Error('VAT should be specified');\n    var cleanVAT = removeExtraChars(vat);\n    var result = new Result(cleanVAT);\n    var country = getCountry(cleanVAT, this.countries);\n    if (!country) return result;\n    if (isBlocked(country, this.blocked, this.allowed)) return new Result(cleanVAT, false, country);\n    var isValid = isVatValid(cleanVAT, country);\n    if (isValid) return new Result(cleanVAT, isValid, country);\n    return result;\n  }\n};\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });
});