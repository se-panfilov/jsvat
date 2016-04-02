var jsvat = (function (COUNTRIES) {
  'use strict';

  //TODO (S.Panfilov) Fixed config and refactor
  this.config = {
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
  };

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
    checkVAT: function (vat, isDetailed) {
      if (!vat) return false;

      vat = getClearVAT(vat);

      var result = {
        isValid: false,
        countries: []
      };

      for (var countryName in COUNTRIES) {
        if (COUNTRIES.hasOwnProperty(countryName)) {
          var regexArr = _makeArr(COUNTRIES[countryName].regex);

          for (var i = 0; i < regexArr.length; i++) {

            //If once become a true, shouldn't be false any more
            if (!result.isValid) {
              result.isValid = _validate(vat, regexArr[i], countryName);
            }

            if (result.isValid) {
              if (!isDetailed) {
                return result.isValid
              }
              else {
                result.push(countryName);
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