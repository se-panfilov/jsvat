var ALL_COUNTRIES = {}

function validateRegex (vat, regex) {
  return regex.test(vat)
}

function validateRules (vat, regex, countryName) {
  var parsedNum = regex.exec(vat)
  var vatNum = parsedNum[2]

  return ALL_COUNTRIES[countryName].calcFn(vatNum)
}

function validate (vat, regex, countryName) {
  var result = false
  if (validateRegex(vat, regex)) {
    result = validateRules(vat, regex, countryName)
  }
  return result
}

function removeExtraChars (vat) {
  vat = vat || ''
  return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '')
}

function isCountryBlocked (config, countryName) {
  if (!config || config.length === 0) return false

  return config.indexOf(countryName) === -1
}

function checkValidity (vat, countryName) {
  var regexArr = ALL_COUNTRIES[countryName].rules.regex
  for (var i = 0; i < regexArr.length; i++) {
    var isValid = validate(vat, regexArr[i], countryName)
    if (isValid) return isValid && !isCountryBlocked(exports.config, countryName)
  }
  return false
}


function Result (vat, isValid, country) {
  this.value = vat || null
  this.isValid = !!isValid

  if (country) {
    this.country = {
      name: country.name,
      isoCode: {
        short: country.codes[0],
        long: country.codes[1],
        numeric: country.codes[2]
      }
    }
  }

}

function isInList (list, country) {
  for (var i = 0; i < list.length; i++) {
    var val = list[i]
    if (val === country.name) return true
    if (val === country.codes[0] || val === country.codes[1] || val === country.codes[2]) return true
  }

  return false
}

function isBlocked (country, blocked, allowed) {
  var isBlocked = isInList(blocked, country)
  if (isBlocked) return true
  var isAllowed = isInList(allowed, country)
  return allowed.length > 0 && !isAllowed
}

function getCountry (vat, countries) {
  var prefix = vat.match(/^[A-z]*/)

  for (var i = 0; i < countries.length; i++) {
    const country = countries[i]
    if (prefix === country.codes[0] || prefix === country.codes[1] || prefix === country.codes[2]) return country
  }

  return null
}

function isValid (vat, country) {
  return country.calcFn(vat)
}

var exports = {
  blocked: [],
  allowed: [],
  checkVAT: function (vat) {
    if (!vat) throw new Error('VAT should be specified')
    var cleanVAT = removeExtraChars(vat)
    var result = new Result(cleanVAT)

    var country = getCountry(cleanVAT, this.countries)
    if (isBlocked(country, this.blocked, this.allowed)) return result

    var isValid = isValid(cleanVAT, country)
    if (isValid) return new Result(cleanVAT, isValid, country)

    return result
  }
}

exports.countries = ALL_COUNTRIES

