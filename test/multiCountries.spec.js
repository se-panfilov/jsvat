import { unitedKingdom, brazil, lithuania } from '../index';
import * as unitedKingdomVat from './countries_vat_lists/unitedKingdom.vat';
import * as brazilVat from './countries_vat_lists/brazil.vat';
import * as lithuanianVat from './countries_vat_lists/lithuania.vat';
import { addCharsToString, checkInvalidVat, checkOnlyValidFormatVat, checkValidVat } from './utils';

const countriesToTest = [brazil, unitedKingdom, lithuania];

describe('Multicountries', () => {
  describe('United Kingdom', () => {
    const { codes, invalid, name, valid, validOnlyByFormat } = unitedKingdomVat;

    it('should return "true" result for valid VATs', () => {
      valid.forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" for "isSupportedCountry" and "isValidFormat" fields, but "false" for "isValid" for VATs that match format but still invalid', () => {
      validOnlyByFormat.forEach((vat) => checkOnlyValidFormatVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra dash characters', () => {
      valid.map((vat) => addCharsToString(vat, '-')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra space characters', () => {
      valid.map((vat) => addCharsToString(vat, ' ')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "false" result for invalid VATs', () => {
      invalid.forEach((vat) => checkInvalidVat(vat, countriesToTest));
    });
  });

  describe('Brazil', () => {
    const { codes, invalid, name, valid, validOnlyByFormat } = brazilVat;

    it('should return "true" result for valid VATs', () => {
      valid.forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" for "isSupportedCountry" and "isValidFormat" fields, but "false" for "isValid" for VATs that match format but still invalid', () => {
      validOnlyByFormat.forEach((vat) => checkOnlyValidFormatVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra dash characters', () => {
      valid.map((vat) => addCharsToString(vat, '-')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra space characters', () => {
      valid.map((vat) => addCharsToString(vat, ' ')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "false" result for invalid VATs', () => {
      invalid.forEach((vat) => checkInvalidVat(vat, countriesToTest));
    });
  });

  describe('Lithuanian', () => {
    const { codes, invalid, name, valid, validOnlyByFormat } = lithuanianVat;

    it('should return "true" result for valid VATs', () => {
      valid.forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" for "isSupportedCountry" and "isValidFormat" fields, but "false" for "isValid" for VATs that match format but still invalid', () => {
      validOnlyByFormat.forEach((vat) => checkOnlyValidFormatVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra dash characters', () => {
      valid.map((vat) => addCharsToString(vat, '-')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "true" result for valid VATs with extra space characters', () => {
      valid.map((vat) => addCharsToString(vat, ' ')).forEach((vat) => checkValidVat(vat, countriesToTest, codes, name));
    });

    it('should return "false" result for invalid VATs', () => {
      invalid.forEach((vat) => checkInvalidVat(vat, countriesToTest));
    });
  });
});
