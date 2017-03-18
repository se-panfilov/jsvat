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

function removeExtraChars (vat) {
  vat = vat || ''
  return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '')
}

function isValEqToCode (val, codes) {
  return (val === codes[0] || val === codes[1] || val === codes[2])
}

function isInList (list, country) {
  if (!list) return false

  for (var i = 0; i < list.length; i++) {
    var val = list[i].toUpperCase()
    if (val === country.name.toUpperCase()) return true
    if (isValEqToCode(val, country.codes)) return true
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
  for (var k in countries) {
    if (countries.hasOwnProperty(k)) {
      var regexpValidRes = isVatValidToRegexp(vat, countries[k].rules.regex)
      if (regexpValidRes.isValid) return countries[k]
    }
  }

  return null
}

function isVatValidToRegexp (vat, regexArr) {
  for (var i = 0; i < regexArr.length; i++) {
    var regex = regexArr[i]
    var isValid = regex.test(vat)
    if (isValid) return {isValid: true, regex: regex}
  }

  return {isValid: false}
}

function isVatMathValid (vat, country) {
  return country.calcFn(vat)
}

function isVatValid (vat, country) {
  var regexpValidRes = isVatValidToRegexp(vat, country.rules.regex)
  if (!regexpValidRes.isValid) return false
  return isVatMathValid(regexpValidRes.regex.exec(vat)[2], country)
}

var exports = {
  blocked: [],
  allowed: [],
  countries: {},
  checkVAT: function (vat) {
    if (!vat) throw new Error('VAT should be specified')
    var cleanVAT = removeExtraChars(vat)
    var result = new Result(cleanVAT)

    var country = getCountry(cleanVAT, this.countries)
    if (!country) return result
    if (isBlocked(country, this.blocked, this.allowed)) return new Result(cleanVAT, false, country)

    var isValid = isVatValid(cleanVAT, country)
    if (isValid) return new Result(cleanVAT, isValid, country)

    return result
  }
}

