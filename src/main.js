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
    
    
    
  };

  //Support of node.js
  if (typeof module === 'object' && module.exports) module.exports = exports;

  return exports;
})();