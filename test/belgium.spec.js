import { belgium } from '../index'
import { codes, invalid, name, valid } from './countries_vat_lists/belgium.vat'
import { addCharsToString, checkInvalidVat, checkValidVat } from './utils'

describe('Belgium', () => {

  it('should return true result for valid VATs', () => {
    valid.forEach(vat => checkValidVat(vat, [belgium], codes, name))
  })

  it('should return true result for valid VATs with extra dash characters', () => {
    valid
      .map(vat => addCharsToString(vat, '-'))
      .forEach(vat => checkValidVat(vat, [belgium], codes, name))
  })

  it('should return true result for valid VATs with extra space characters', () => {
    valid
      .map(vat => addCharsToString(vat, ' '))
      .forEach(vat => checkValidVat(vat, [belgium], codes, name))
  })

  it('should return false result for invalid VATs', () => {
    invalid.forEach(vat => checkInvalidVat(vat, [belgium]))
  })

})
