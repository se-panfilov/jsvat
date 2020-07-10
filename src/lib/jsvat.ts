export interface Multipliers {
  readonly [key: string]: ReadonlyArray<number>;
}

export interface Rules {
  multipliers: Multipliers;
  check?: RegExp;
  regex: ReadonlyArray<RegExp>;
  lookup?: ReadonlyArray<number>;
  typeFormats?: { readonly [key: string]: RegExp };
  additional?: ReadonlyArray<RegExp>;
}

export interface Country {
  name: string;
  codes: ReadonlyArray<string>;
  calcFn: (vat: string, options?: { readonly [key: string]: any }) => boolean;
  rules: Rules;
}

export interface VatCheckResult {
  value?: string;
  isValid: boolean;
  isValidFormat: boolean;
  isSupportedCountry: boolean;
  country?: {
    name: string;
    isoCode: { short: string; long: string; numeric: string };
  };
}

function makeResult(vat: string, isValid?: boolean, country?: Country): VatCheckResult {
  return {
    value: vat || undefined,
    isValid: Boolean(isValid),
    isValidFormat: country ? isVatValidToRegexp(vat, country.rules.regex).isValid : false,
    isSupportedCountry: Boolean(country),
    country: !country
      ? undefined
      : {
          name: country.name,
          isoCode: {
            short: country.codes[0],
            long: country.codes[1],
            numeric: country.codes[2]
          }
        }
  };
}

function removeExtraChars(vat: string = ''): string {
  return vat
    .toString()
    .toUpperCase()
    .replace(/(\s|-|\.|\/)+/g, '');
}

function getCountryCodes(country: Country): ReadonlyArray<string> {
  return [...country.codes, country.name === 'Greece' ? 'EL' : undefined].filter(Boolean) as ReadonlyArray<string>;
}

function getCountry(vat: string, countriesList: ReadonlyArray<Country>): Country | undefined {
  for (const country of countriesList) {
    if (startsWithCode(vat, country)) return { ...country };
  }
  return undefined;
}

function startsWithCode(vat: string, country: Country): boolean {
  const countryCodes = getCountryCodes(country);
  return countryCodes.filter((code) => vat.startsWith(code)).length > 0;
}

function isVatValidToRegexp(vat: string, regexArr: ReadonlyArray<RegExp>): { isValid: boolean; regex?: RegExp } {
  for (const regex of regexArr) {
    const isValid = regex.test(vat);
    if (isValid) return { isValid: true, regex: regex };
  }

  return { isValid: false, regex: undefined };
}

function isVatValid(vat: string, country: Country): boolean {
  const regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
  if (!regexpValidRes.isValid || !regexpValidRes.regex) return false;
  const regexResult = regexpValidRes.regex.exec(vat);
  if (!regexResult) return false;
  return country.calcFn(regexResult[2]);
}

export function checkVAT(vat: string, countriesList: ReadonlyArray<Country> = []): VatCheckResult {
  if (!vat) return makeResult(vat, false);
  const cleanVAT = removeExtraChars(vat);
  const country = getCountry(cleanVAT, countriesList);
  const isValid = country ? isVatValid(cleanVAT, country) : false;
  return makeResult(cleanVAT, isValid, country);
}
