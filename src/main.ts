// TODO (S.Panfilov) some bug happens with checks here if I replace Array with ReadonlyArray
export type Multipliers = Array<number> | { readonly [key: string]: Array<number> };

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

export function checkVAT (vat: string, countries: { [key: string]: Country } = {}): VatCheckResult {
  if (!vat) throw new Error('VAT should be specified');
  const cleanVAT = removeExtraChars(vat);
  const result = makeResult(cleanVAT);

  const country = getCountry(cleanVAT, {...countries});
  if (!country) return result;

  const isValid = isVatValid(cleanVAT, country);
  if (isValid) return makeResult(cleanVAT, isValid, country);

  return result;
}
