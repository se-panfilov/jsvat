import { austria } from './countries/austria';
import { belgium } from './countries/belgium';
import { bulgaria } from './countries/bulgaria';
import { croatia } from './countries/croatiat';
import { cyprus } from './countries/cyprus';
// eslint-disable-next-line camelcase
import { czech_republic } from './countries/czech_republic';
import { denmark } from './countries/denmark';
import { estonia } from './countries/estonia';
import { europe } from './countries/europe';
import { finland } from './countries/finland';
import { france } from './countries/france';
import { germany } from './countries/germany';
import { greece } from './countries/greece';
import { hungary } from './countries/hungary';
import { ireland } from './countries/ireland';
import { italy } from './countries/italy';
import { latvia } from './countries/latvia';
import { lithuania } from './countries/lithuania';
import { luxembourg } from './countries/luxembourg';
import { malta } from './countries/malta';
import { netherlands } from './countries/netherlands';
import { norway } from './countries/norway';
import { poland } from './countries/poland';
import { portugal } from './countries/portugal';
import { romania } from './countries/romania';
import { russia } from './countries/russia';
import { serbia } from './countries/serbia';
// eslint-disable-next-line camelcase
import { slovakia_republic } from './countries/slovakia_republic';
import { slovenia } from './countries/slovenia';
import { spain } from './countries/spain';
import { sweden } from './countries/sweden';
import { switzerland } from './countries/switzerland';
// eslint-disable-next-line camelcase
import { united_kingdom } from './countries/united_kingdom';

export interface Rules {
  multipliers?: Array<number> | { readonly [key: string]: Array<number> };
  check?: RegExp;
  regex: Array<RegExp>;
  lookup?: Array<number>;
  typeFormats?: { readonly [key: string]: RegExp }; // TODO (S.Panfilov) fix this type!!
  additional?: Array<RegExp>;
}

export interface Country {
  name: string;
  codes: Array<string>;
  calcFn: (vat: string) => boolean;
  rules: Rules;
}

export interface VatCheckResult {
  value?: string;
  isValid: boolean;
  country?: {
    name: string,
    isoCode: { short: string, long: string, numeric: string }
  };
}

function makeResult(vat: string, isValid?: boolean, country?: Country): VatCheckResult {
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
  };
}

function removeExtraChars(vat: string) {
  vat = vat || '';
  return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
}

function isValEqToCode(val: string, codes: ReadonlyArray<string>) {
  return (val === codes[0] || val === codes[1] || val === codes[2]);
}

function isInList(country: Country, list?: Array<string>) {
  if (!list) return false;

  for (let i = 0; i < list.length; i++) {
    const val = list[i].toUpperCase();
    if (val === country.name.toUpperCase()) return true;
    if (isValEqToCode(val, country.codes)) return true;
  }

  return false;
}

function isBlocked(country: Country, blocked: Array<string> = [], allowed: Array<string> = []) {
  const isBlocked = isInList(country, blocked);
  if (isBlocked) return true;
  const isAllowed = isInList(country, allowed);
  return allowed.length > 0 && !isAllowed;
}

function getCountry(vat: string, countries: { [key: string]: Country }) {
  console.info('countries', countries);
  for (let k in countries) {
    if (countries.hasOwnProperty(k)) {
      const regexpValidRes = isVatValidToRegexp(vat, countries[k].rules.regex);
      if (regexpValidRes.isValid) return countries[k];
    }
  }

  return null;
}

function isVatValidToRegexp(vat: string, regexArr: Array<RegExp>): { isValid: boolean, regex?: RegExp } {
  for (let i = 0; i < regexArr.length; i++) {
    const regex = regexArr[i];
    const isValid = regex.test(vat);
    if (isValid) return { isValid: true, regex: regex };
  }

  return { isValid: false, regex: undefined };
}

function isVatMathValid(vat: string, country: Country) {
  return country.calcFn(vat);
}

function isVatValid(vat: string, country: Country) {
  const regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
  if (!regexpValidRes.isValid || !regexpValidRes.regex) return false;
  const regexResult = regexpValidRes.regex.exec(vat);
  if (!regexResult) return false;
  return isVatMathValid(regexResult[2], country);
}

export const blocked: Array<string> = [];
export const allowed: Array<string> = [];
export const countries: { [key: string]: Country } = {
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
};

export function checkVAT(vat: string, _blocked: Array<string> = [], _allowed: Array<string> = [], _countries: { [key: string]: Country } = {}): VatCheckResult {
  if (!vat) throw new Error('VAT should be specified');
  const cleanVAT = removeExtraChars(vat);
  const result = makeResult(cleanVAT);

  const country = getCountry(cleanVAT, { ...countries, ..._countries });
  if (!country) return result;
  if (isBlocked(country, [...blocked, ..._blocked], [...allowed, ..._allowed])) return makeResult(cleanVAT, false, country);

  const isValid = isVatValid(cleanVAT, country);
  if (isValid) return makeResult(cleanVAT, isValid, country);

  return result;
}
