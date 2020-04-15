import { checkVAT } from '../index'

export function checkValidVat(vat, countriesList, codes, name) {
  const result = checkVAT(vat, countriesList)

  if (!result.isValid) console.info('Invalid VAT:', vat);

  expect(result.isValid).toBe(true)
  expect(result.isSupportedCountry).toBe(true)
  expect(result.isValidFormat).toBe(true)
  expect(result.country.name).toBe(name)
  expect(result.country.isoCode.short).toBe(codes[0])
  expect(result.country.isoCode.long).toBe(codes[1])
  expect(result.country.isoCode.numeric).toBe(codes[2])
}

export function checkInvalidVat(vat, countriesList) {
  const result = checkVAT(vat, countriesList)
  if (result.isValid) console.info('Following VAT should be invalid:', vat);
  expect(result.isValid).toBe(false)
}


export function checkOnlyValidFormatVat(vat, countriesList) {
  const result = checkVAT(vat, countriesList)

  if (!result.isValid) console.info('Invalid VAT:', vat);

  expect(result.isValid).toBe(false)
  expect(result.isSupportedCountry).toBe(true)
  expect(result.isValidFormat).toBe(true)
}

export function addCharsToString(item, char) {
  const val = item.split('')
  val.splice(3, 0, char)
  val.splice(7, 0, char)
  return val.join('')
}

