import { romania, getVATExample, checkVAT } from '../index';
import { codes, invalid, name, valid, validOnlyByFormat } from './countries_vat_lists/romania.vat';
import { addCharsToString, checkInvalidVat, checkOnlyValidFormatVat, checkValidVat } from './utils';

describe('Romania', () => {
  it('should return "true" result for valid VATs', () => {
    valid.forEach((vat) => checkValidVat(vat, [romania], codes, name));
  });

  it('should return "true" for "isSupportedCountry" and "isValidFormat" fields, but "false" for "isValid" for VATs that match format but still invalid', () => {
    validOnlyByFormat.forEach((vat) => checkOnlyValidFormatVat(vat, [romania], codes, name));
  });

  it('should return "true" result for valid VATs with extra dash characters', () => {
    valid.map((vat) => addCharsToString(vat, '-')).forEach((vat) => checkValidVat(vat, [romania], codes, name));
  });

  it('should return "true" result for valid VATs with extra space characters', () => {
    valid.map((vat) => addCharsToString(vat, ' ')).forEach((vat) => checkValidVat(vat, [romania], codes, name));
  });

  it('should return "false" result for invalid VATs', () => {
    invalid.forEach((vat) => checkInvalidVat(vat, [romania]));
  });

  it('should example be a valid format', () => {
    const example = getVATExample(romania);

    expect(checkVAT(example, [romania]).isValidFormat).toBe(true);
  });
});
