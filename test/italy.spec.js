import { italy, getVATExample, checkVAT } from '../index';
import { codes, invalid, name, valid, validOnlyByFormat } from './countries_vat_lists/italy.vat';
import { addCharsToString, checkInvalidVat, checkOnlyValidFormatVat, checkValidVat } from './utils';

describe('Italy', () => {
  it('should return "true" result for valid VATs', () => {
    valid.forEach((vat) => checkValidVat(vat, [italy], codes, name));
  });

  it('should return "true" for "isSupportedCountry" and "isValidFormat" fields, but "false" for "isValid" for VATs that match format but still invalid', () => {
    validOnlyByFormat.forEach((vat) => checkOnlyValidFormatVat(vat, [italy], codes, name));
  });

  it('should return "true" result for valid VATs with extra dash characters', () => {
    valid.map((vat) => addCharsToString(vat, '-')).forEach((vat) => checkValidVat(vat, [italy], codes, name));
  });

  it('should return "true" result for valid VATs with extra space characters', () => {
    valid.map((vat) => addCharsToString(vat, ' ')).forEach((vat) => checkValidVat(vat, [italy], codes, name));
  });

  it('should return "false" result for invalid VATs', () => {
    invalid.forEach((vat) => checkInvalidVat(vat, [italy]));
  });

  it('should example be a valid format', () => {
    const example = getVATExample(italy);

    expect(checkVAT(example, [italy]).isValidFormat).toBe(true);
  });
});
