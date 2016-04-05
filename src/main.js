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
  checkVAT: function (vat, isDetailed) {
    if (!vat) return false;

    vat = getClearVAT(vat);

    var result = {
      isValid: false,
      countries: []
    };

    for (var countryName in COUNTRIES) {
      if (COUNTRIES.hasOwnProperty(countryName)) {

        //Make sure country check not skipped in config
        if (exports.config[countryName] && exports.config[countryName] !== false) {

          var regexArr = _makeArr(COUNTRIES[countryName].rules.regex);
          for (var i = 0; i < regexArr.length; i++) {

            //If once become a true, shouldn't be a false any more
            result.isValid = (_validate(vat, regexArr[i], countryName)) ? true : result.isValid;

            if (result.isValid) {
              //If not detailed just return bool and exit
              if (!isDetailed) {
                return result.isValid
              }
              else {
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