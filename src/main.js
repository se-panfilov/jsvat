// @flow

import { austria } from './countries/austria.js'
import { belgium } from './countries/belgium.js'
import { bulgaria } from './countries/bulgaria.js'
import { croatia } from './countries/croatia.js'
import { cyprus } from './countries/cyprus.js'
// eslint-disable-next-line camelcase
import { czech_republic } from './countries/czech_republic.js'
import { denmark } from './countries/denmark.js'
import { estonia } from './countries/estonia.js'
import { europe } from './countries/europe.js'
import { finland } from './countries/finland.js'
import { france } from './countries/france.js'
import { germany } from './countries/germany.js'
import { greece } from './countries/greece.js'
import { hungary } from './countries/hungary.js'
import { ireland } from './countries/ireland.js'
import { italy } from './countries/italy.js'
import { latvia } from './countries/latvia.js'
import { lithuania } from './countries/lithuania.js'
import { luxembourg } from './countries/luxembourg.js'
import { malta } from './countries/malta.js'
import { netherlands } from './countries/netherlands.js'
import { norway } from './countries/norway.js'
import { poland } from './countries/poland.js'
import { portugal } from './countries/portugal.js'
import { romania } from './countries/romania.js'
import { russia } from './countries/russia.js'
import { serbia } from './countries/serbia.js'
// eslint-disable-next-line camelcase
import { slovakia_republic } from './countries/slovakia_republic.js'
import { slovenia } from './countries/slovenia.js'
import { spain } from './countries/spain.js'
import { sweden } from './countries/sweden.js'
import { switzerland } from './countries/switzerland.js'
// eslint-disable-next-line camelcase
import { united_kingdom } from './countries/united_kingdom.js'

// export interface Rules {
//   multipliers?: any | undefined;// Array<number> | {[string] : Array<number>}; // TODO (S.Panfilov) fix this type!!
//   regex: Array<RegExp>;
//   lookup?: Array<number>;
//   typeFormats?: any; // {[string] : Array<number>}; // TODO (S.Panfilov) fix this type!!
//   additional?: Array<RegExp>;
// }

export interface Country {
  name: string;
  codes: Array<string>;
  calcFn: (vat: string) => boolean;
  rules: any; // Rules;
}

export interface VatCheckResult {
  value: string | typeof undefined;
  isValid: boolean;
  country: ?{ name: string, isoCode: { short: string, long: string, numeric: string } };
}

function makeResult (vat: string, isValid?: boolean, country?: Country): VatCheckResult {
  return {
    value: vat || undefined,
    isValid: Boolean(isValid),
    country: (!country) ? undefined : {
      name: country.name,
      isoCode: {
        short: country.codes[0],
        long: country.codes[1],
        numeric: country.codes[2]
      }
    }
  }
}

function removeExtraChars (vat: string) {
  vat = vat || ''
  return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '')
}

function isValEqToCode (val, codes) {
  return (val === codes[0] || val === codes[1] || val === codes[2])
}

function isInList (country: Country, list?: Array<string>) {
  if (!list) return false

  for (let i = 0; i < list.length; i++) {
    const val = list[i].toUpperCase()
    if (val === country.name.toUpperCase()) return true
    if (isValEqToCode(val, country.codes)) return true
  }

  return false
}

function isBlocked (country: Country, blocked: Array<string> = [], allowed: Array<string> = []) {
  const isBlocked = isInList(country, blocked)
  if (isBlocked) return true
  const isAllowed = isInList(country, allowed)
  return allowed.length > 0 && !isAllowed
}

function getCountry (vat: string, countries: { [string]: Country }) {
  console.info('countries', countries)
  for (let k in countries) {
    if (countries.hasOwnProperty(k)) {
      var regexpValidRes = isVatValidToRegexp(vat, countries[k].rules.regex)
      if (regexpValidRes.isValid) return countries[k]
    }
  }

  return null
}

function isVatValidToRegexp (vat: string, regexArr: Array<RegExp>): { isValid: boolean, regex?: RegExp } {
  for (let i = 0; i < regexArr.length; i++) {
    const regex = regexArr[i]
    const isValid = regex.test(vat)
    if (isValid) return { isValid: true, regex: regex }
  }

  return { isValid: false, regex: undefined }
}

function isVatMathValid (vat: string, country: Country) {
  return country.calcFn(vat)
}

function isVatValid (vat: string, country: Country) {
  const regexpValidRes = isVatValidToRegexp(vat, country.rules.regex)
  if (!regexpValidRes.isValid || !regexpValidRes.regex) return false
  const regexResult = regexpValidRes.regex.exec(vat)
  if (!regexResult) return false
  return isVatMathValid(regexResult[2], country)
}

export const blocked: Array<string> = []
export const allowed: Array<string> = []
export const countries: { [string]: Country } = {
  austria,
  belgium,
  bulgaria,
  croatia,
  cyprus,
  czech_republic,
  denmark,
  estonia,
  europe,
  finland,
  france,
  germany,
  greece,
  hungary,
  ireland,
  italy,
  latvia,
  lithuania,
  luxembourg,
  malta,
  netherlands,
  norway,
  poland,
  portugal,
  romania,
  russia,
  serbia,
  slovakia_republic,
  slovenia,
  spain,
  sweden,
  switzerland,
  united_kingdom
}

export function checkVAT (vat: string, _blocked: Array<string> = [], _allowed: Array<string> = [], _countries: { [string]: Country } = {}): VatCheckResult {
  if (!vat) throw new Error('VAT should be specified')
  const cleanVAT = removeExtraChars(vat)
  const result = makeResult(cleanVAT)

  const country = getCountry(cleanVAT, { ...countries, ..._countries })
  if (!country) return result
  if (isBlocked(country, [...blocked, ..._blocked], [...allowed, ..._allowed])) return makeResult(cleanVAT, false, country)

  const isValid = isVatValid(cleanVAT, country)
  if (isValid) return makeResult(cleanVAT, isValid, country)

  return result
}
