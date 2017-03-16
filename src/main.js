var COUNTRIES = {}

function _validateRegex (vat, regex) {
  return regex.test(vat)
}

function _validateRules (vat, regex, countryName) {
  var parsedNum = regex.exec(vat)
  var vatNum = parsedNum[2]

  return COUNTRIES[countryName].calcs(vatNum)
}

function _validate (vat, regex, countryName) {
  var result = false
  if (_validateRegex(vat, regex)) {
    result = _validateRules(vat, regex, countryName)
  }
  return result
}

function removeExtraChars (vat) {
  vat = vat || ''
  return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '')
}

function _isCountryBlocked (config, countryName) {
  if (!config || config.length === 0) return false

  return config.indexOf(countryName) === -1
}

function checkValidity (vat, countryName) {
  var regexArr = COUNTRIES[countryName].rules.regex
  for (var i = 0; i < regexArr.length; i++) {
    var isValid = _validate(vat, regexArr[i], countryName)
    if (isValid) return isValid && !_isCountryBlocked(exports.config, countryName)
  }
  return false
}

var exports = {
  config: [],
  checkVAT: function (vat) {
    var cleanVAT = removeExtraChars(vat)
    var result = {
      value: cleanVAT,
      isValid: false,
      country: null,
      countryCode: null
    }

    if (!vat) return result

    var ccArr = (/^([A-z])*/).exec(cleanVAT)
    if (ccArr && ccArr.length > 0) result.countryCode = ccArr[0].toUpperCase()

    for (var countryName in COUNTRIES) {
      if (COUNTRIES.hasOwnProperty(countryName)) {
        result.isValid = checkValidity(result.value, countryName)

        if (result.isValid) {
          result.country = countryName
          console.info(result)
          return result
        }
      }
    }
    console.info(result)
    return result
  }
}
