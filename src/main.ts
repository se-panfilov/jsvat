import { austria } from './countries/austria';
import { belgium } from './countries/belgium';
import { bulgaria } from './countries/bulgaria';
import { croatia } from './countries/croatiat';
import { cyprus } from './countries/cyprus';
import { czechRepublic } from './countries/czechRepublic';
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
import { slovakiaRepublic } from './countries/slovakiaRepublic';
import { slovenia } from './countries/slovenia';
import { spain } from './countries/spain';
import { sweden } from './countries/sweden';
import { switzerland } from './countries/switzerland';
import { unitedKingdom } from './countries/unitedKingdom';

export type Multipliers = ReadonlyArray<number> | { readonly [key: string]: ReadonlyArray<number> };

export interface Rules {
  multipliers?: Multipliers;
  check?: RegExp;
  regex: ReadonlyArray<RegExp>;
  lookup?: ReadonlyArray<number>;
  typeFormats?: { readonly [key: string]: RegExp };
  additional?: ReadonlyArray<RegExp>;
}

export interface Country {
  name: string;
  codes: ReadonlyArray<string>;
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
  };
}

function removeExtraChars (vat: string = ''): string {
  return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
}

function isValEqToCode (val: string, codes: ReadonlyArray<string>): boolean {
  return (val === codes[0] || val === codes[1] || val === codes[2]);
}

function isInList (country: Country, list?: ReadonlyArray<string>): boolean {
  if (!list) return false;

  for (const item of list) {
    const val = item.toUpperCase();
    if (val === country.name.toUpperCase()) return true;
    if (isValEqToCode(val, country.codes)) return true;
  }

  return false;
}

function isBlocked (country: Country, blockedList: ReadonlyArray<string> = [], allowedList: ReadonlyArray<string> = []): boolean {
  const isInBlockedList = isInList(country, blockedList);
  if (isInBlockedList) return true;
  const isAllowed = isInList(country, allowedList);
  return allowedList.length > 0 && !isAllowed;
}

function getCountry (vat: string, countriesObj: { [key: string]: Country }): Country | undefined {
  for (const k in countriesObj) {
    if (countriesObj.hasOwnProperty(k)) {
      const regexpValidRes = isVatValidToRegexp(vat, countriesObj[k].rules.regex);
      if (regexpValidRes.isValid) return countriesObj[k];
    }
  }

  return undefined;
}

function isVatValidToRegexp (vat: string, regexArr: ReadonlyArray<RegExp>): { isValid: boolean, regex?: RegExp } {
  for (const regex of regexArr) {
    const isValid = regex.test(vat);
    if (isValid) return {isValid: true, regex: regex};
  }

  return {isValid: false, regex: undefined};
}

function isVatMathValid (vat: string, country: Country): boolean {
  return country.calcFn(vat);
}

function isVatValid (vat: string, country: Country): boolean {
  const regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
  if (!regexpValidRes.isValid || !regexpValidRes.regex) return false;
  const regexResult = regexpValidRes.regex.exec(vat);
  if (!regexResult) return false;
  return isVatMathValid(regexResult[2], country);
}

export const blocked: ReadonlyArray<string> = [];
export const allowed: ReadonlyArray<string> = [];
export const countries: { [key: string]: Country } = {
  austria,
  belgium,
  bulgaria,
  croatia,
  cyprus,
  czechRepublic,
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
  slovakiaRepublic,
  slovenia,
  spain,
  sweden,
  switzerland,
  unitedKingdom
};

export function checkVAT (vat: string, _blocked: ReadonlyArray<string> = [], _allowed: ReadonlyArray<string> = [], _countries: { [key: string]: Country } = {}): VatCheckResult {
  if (!vat) throw new Error('VAT should be specified');
  const cleanVAT = removeExtraChars(vat);
  const result = makeResult(cleanVAT);

  const country = getCountry(cleanVAT, {...countries, ..._countries});
  if (!country) return result;
  if (isBlocked(country, [...blocked, ..._blocked], [...allowed, ..._allowed])) return makeResult(cleanVAT, false, country);

  const isValid = isVatValid(cleanVAT, country);
  if (isValid) return makeResult(cleanVAT, isValid, country);

  return result;
}
