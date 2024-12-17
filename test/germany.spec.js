import { germany } from '../index';
import { codes, invalid, name, valid, validOnlyByFormat } from './countries_vat_lists/germany.vat';
import {
  addCharsToString,
  checkInvalidVat,
  checkOnlyValidFormatVat,
  checkValidVat,
  checkValidVatWithoutRemovingExtraChars
} from './utils';

describe('Germany', () => {
  it('should return "true" result for valid VATs', () => {
    valid.forEach((vat) => checkValidVat(vat, [germany], codes, name));
  });

  it('should return "true" for "isSupportedCountry" and "isValidFormat" fields, but "false" for "isValid" for VATs that match format but still invalid', () => {
    validOnlyByFormat.forEach((vat) => checkOnlyValidFormatVat(vat, [germany], codes, name));
  });

  it('should return "true" result for valid VATs with extra dash characters', () => {
    valid.map((vat) => addCharsToString(vat, '-')).forEach((vat) => checkValidVat(vat, [germany], codes, name));
  });

  it('should return "false" result for valid VATs with extra dash characters when shouldRemoveExtraChars is set to false', () => {
    valid
      .map((vat) => addCharsToString(vat, '-'))
      .forEach((vat) => checkValidVatWithoutRemovingExtraChars(vat, [germany], codes, name));
  });

  it('should return "true" result for valid VATs with extra space characters', () => {
    valid.map((vat) => addCharsToString(vat, ' ')).forEach((vat) => checkValidVat(vat, [germany], codes, name));
  });

  it('should return "false" result for valid VATs with extra space characters when shouldRemoveExtraChars is set to false', () => {
    valid
      .map((vat) => addCharsToString(vat, '  '))
      .forEach((vat) => checkValidVatWithoutRemovingExtraChars(vat, [germany], codes, name));
  });

  it('should return "false" result for invalid VATs', () => {
    invalid.forEach((vat) => checkInvalidVat(vat, [germany]));
  });
});
