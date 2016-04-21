var COUNTRIES = {};

function _validateRegex(vat, regex) {
  return regex.test(vat);
}

function _validateRules(vat, regex, countryName) {
  var parsedNum = regex.exec(vat);
  var vatNum = parsedNum[2];

  return COUNTRIES[countryName].calcs(vatNum);
}

function _validate(vat, regex, countryName) {
  var result = false;
  if (_validateRegex(vat, regex)) {
    result = _validateRules(vat, regex, countryName);
  }
  return result;
}

function _getPureVAT(vat) {
  return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
}

function _isCountryBlocked(config, countryName) {
  if (!config || Object.keys(config).length === 0) return false;

  var country = config[countryName];

  return (country === null || country === null) ? true : !country;
}

function checkValidity(vat, regexArr) {
  for (var i = 0; i < regexArr.length; i++) {
    var isValid = _validate(vat, regexArr[i], countryName);
    if (isValid) return isValid && !_isCountryBlocked(exports.config, countryName);
  }
  return false;
}

var exports = {
  config: {},
  checkVAT: function (vat) {
    if (!vat) return false;

    vat = _getPureVAT(vat);

    var result = {
      value: vat,
      isValid: false,
      country: null
    };

    for (var countryName in COUNTRIES) {
      if (COUNTRIES.hasOwnProperty(countryName)) {

        result.isValid = checkValidity(vat, COUNTRIES[countryName].rules.regex);
        if (result.isValid) return result;
      }
    }

    return result;

  }
};